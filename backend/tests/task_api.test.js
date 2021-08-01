const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const randID = Math.floor(Math.random() * 10000);
let token;
let taskID;

describe("Tasks", () => {
  test("Getting auth token succeeds", async () => {
    const passwordHash = await bcrypt.hash("test123", 10);
    const user = new User({ email: `test@${randID}.ok`, passwordHash });
    await user.save();

    await api
      .post("/api/login")
      .send({
        email: `test@${randID}.ok`,
        password: "test123",
      })
      .expect(200)
      .then((res) => {
        token = res.body.token;
      });
  });

  test("creating task succeeds with correct fields", async () => {
    const newTask = {
      title: `Title of the task`,
      completed: false,
    };

    await api
      .post("/api/tasks")
      .auth(token, { type: "bearer" })
      .send(newTask)
      .expect(200)
      .expect("Content-Type", /application\/json/)
      .then((res) => {
        taskID = res.body.id;
      });
  });

  test("Getting tasks succeeds", async () => {
    await api
      .get("/api/tasks")
      .auth(token, { type: "bearer" })
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Deleting task succeeds", async () => {
    await api
      .delete(`/api/tasks/${taskID}`)
      .auth(token, { type: "bearer" })
      .expect(204);
  });
});

afterAll(() => {
  mongoose.connection.close;
});
