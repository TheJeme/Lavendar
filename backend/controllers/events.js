const eventRouter = require("express").Router();
const Event = require("../models/event");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

eventRouter.put("/:id", async (request, response) => {
  const body = request.body;

  const event = {
    likes: body.likes,
  };

  try {
    const newEvent = await Event.findByIdAndUpdate(request.params.id, event, {
      new: true,
    });
    response.json(newEvent.toJSON());
  } catch (error) {
    console.log(error);
  }
});

eventRouter.delete("/:id", async (request, response) => {
  const token = jwt.verify(request.token, process.env.SECRET);

  if (!token.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }

  const id = request.params.id;
  const event = await Event.findById(id);
  if (event.user.toString() === token.id) {
    await Event.findByIdAndRemove(id);
    response.status(204).end();
  }
  return response.status(401).json({
    error: "Unauthorized",
  });
});

eventRouter.post("/", async (request, response) => {
  const body = request.body;
  const token = jwt.verify(request.token, process.env.SECRET);

  if (!token.id)
    return response.status(401).json({ error: "token missing or invalid" });

  const user = await User.findById(token.id);

  if (!body.title || !body.url || !body.author)
    return response
      .status(400)
      .json({ error: "title or url or author is missing" });

  const event = new Event({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id,
  });

  const savedEvent = await event.save();
  user.events = user.events.concat(savedEvent._id);
  await user.save();

  response.json(savedEvent.toJSON());
});

module.exports = eventRouter;
