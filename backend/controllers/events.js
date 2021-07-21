const eventRouter = require("express").Router();
const Event = require("../models/event");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Delete event
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

// Create new event
eventRouter.post("/", async (request, response) => {
  const body = request.body;
  const token = jwt.verify(request.token, process.env.SECRET);

  if (!token.id)
    return response.status(401).json({ error: "token missing or invalid" });

  const user = await User.findById(token.id);

  if (!body.title || !body.date || !body.time)
    return response
      .status(400)
      .json({ error: "title or date or time is missing" });

  const event = new Event({
    title: body.title,
    time: body.time,
    date: body.date,
    user: user._id,
  });

  const savedEvent = await event.save();
  user.events = user.events.concat(savedEvent._id);
  await user.save();

  response.json(savedEvent.toJSON());
});

// Get events
eventRouter.get("/", async (request, response) => {
  const body = request.body;
  const token = jwt.verify(request.token, process.env.SECRET);

  if (!token.id)
    return response.status(401).json({ error: "token missing or invalid" });

  const user = await User.findById(token.id).populate("events");
  response.json(user.events);
});

module.exports = eventRouter;
