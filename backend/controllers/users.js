const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.post("/", async (request, response) => {
  const body = request.body;

  if (body.password.length < 6) {
    return response.status(400).json({
      error: `Password is shorter than 6 characters`,
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    email: body.email,
    passwordHash,
  });

  const newUser = await user.save();
  response.json(newUser.toJSON());
});

usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("events");
  response.json(users.map((user) => user.toJSON()));
});

module.exports = usersRouter;
