const taskRouter = require("express").Router();
const Task = require("../models/task");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Delete task
taskRouter.delete("/:id", async (request, response) => {
  const token = jwt.verify(request.token, process.env.SECRET);

  if (!token.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }

  const id = request.params.id;
  const task = await Task.findById(id);
  if (task.user.toString() === token.id) {
    await Task.findByIdAndRemove(id);
    response.status(204).end();
  }
  return response.status(401).json({
    error: "Unauthorized",
  });
});

// Edit task completed by id.
taskRouter.put("/:id", async (request, response) => {
  const body = request.body;

  const task = {
    completed: body.completed,
  };

  try {
    const newTask = await Task.findByIdAndUpdate(request.params.id, task, {
      new: true,
    });
    response.json(newTask.toJSON());
  } catch (error) {
    console.log(error);
  }
});

// Create new task
taskRouter.post("/", async (request, response) => {
  const body = request.body;
  const token = jwt.verify(request.token, process.env.SECRET);

  if (!token.id)
    return response.status(401).json({ error: "token missing or invalid" });

  const user = await User.findById(token.id);

  if (!body.title)
    return response
      .status(400)
      .json({ error: "title is missing" });

  const task = new Task({
    title: body.title,
    completed: body.completed || false,
    user: user._id,
  });

  const savedTask = await task.save();
  user.tasks = user.tasks.concat(savedTask._id);
  await user.save();

  response.json(savedTask.toJSON());
});

// Get tasks
taskRouter.get("/", async (request, response) => {
  const body = request.body;
  const token = jwt.verify(request.token, process.env.SECRET);

  if (!token.id)
    return response.status(401).json({ error: "token missing or invalid" });

  const user = await User.findById(token.id).populate("tasks");
  response.json(user.tasks);
});

module.exports = taskRouter;
