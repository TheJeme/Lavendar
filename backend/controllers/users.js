const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Register user
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

// Get user data
usersRouter.get("/", async (request, response) => {
  const token = jwt.verify(request.token, process.env.SECRET);

  if (!token.id)
    return response.status(401).json({ error: "token missing or invalid" });

  const user = await User.findById(token.id);
  response.json(user.toJSON());
});

module.exports = usersRouter;
