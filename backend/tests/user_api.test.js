const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const mongoose = require("mongoose");

const randID = Math.floor(Math.random() * 10000);
describe("Authentication", () => {
  test("registering user succeeds with a unique email", async () => {
    const newUser = {
      email: `test@${randID}.ok`,
      password: "test123",
    };

    await api
      .post("/api/users")
      .send(newUser)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("registering fails with a used email", async () => {
    const newUser = {
      email: `test@${randID}.ok`,
      password: "test123",
    };

    await api
      .post("/api/users")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);
  });

  test("Login succeeds with correct credentials", async () => {
    const oldUser = {
      email: `test@${randID}.ok`,
      password: "test123",
    };

    await api
      .post("/api/login")
      .send(oldUser)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Login fails with wrong credentials", async () => {
    const oldUser = {
      email: `test@${randID}.ok`,
      password: "invalid",
    };

    await api
      .post("/api/login")
      .send(oldUser)
      .expect(401)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(() => {
  mongoose.connection.close;
});
