const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const randID = Math.floor(Math.random() * 10000);
let token;
let eventID;

describe("Events", () => {
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

  test("creating event succeeds with correct fields", async () => {
    const newEvent = {
      title: `Title of the event`,
      date: "17.3.2021",
      time: "12.00",
    };

    await api
      .post("/api/events")
      .auth(token, { type: "bearer" })
      .send(newEvent)
      .expect(200)
      .expect("Content-Type", /application\/json/)
      .then((res) => {
        eventID = res.body.id;
      });
  });

  test("Getting events succeeds", async () => {
    await api
      .get("/api/events")
      .auth(token, { type: "bearer" })
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Deleting event succeeds", async () => {
    await api
      .delete(`/api/events/${eventID}`)
      .auth(token, { type: "bearer" })
      .expect(204);
  });
});

afterAll(() => {
  mongoose.connection.close;
});
