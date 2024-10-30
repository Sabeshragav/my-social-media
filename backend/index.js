const express = require("express");
const mongoose = require("mongoose");
const postSchema = require("./postSchema");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
main().catch((err) => console.error(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);

  //fetching all posts
  app.get("/posts", async (req, res, next) => {
    try {
      const reqPosts = await postSchema.find();
      res.status(200).send(reqPosts);
    } catch (err) {
      res.status(500).send("Cant fetch posts");
    }
    next();
  });

  // Deleting a post
  app.delete("/posts/:id", async (req, res, next) => {
    try {
      await postSchema.deleteOne({ _id: req.params.id });
      res.status(200).send({ message: "Post deleted" });
    } catch (err) {
      res.status(500).send({ error: "Could not delete post" });
    }
    next();
  });

  // adding a post
  app.post("/posts", async (req, res, next) => {
    try {
      const { title, datetime, body } = req.body;
      const newPost = await postSchema.create({
        title,
        datetime,
        body,
      });

      res.status(200).send(newPost);
    } catch (err) {
      res.status(500).send({ error: "Could not add the post" });
    }
    next();
  });

  // editing a post
  app.put("/posts/:id", async (req, res, next) => {
    try {
      const { title, datetime, body } = req.body;
      const updatePost = await postSchema.findByIdAndUpdate(
        req.params.id,
        { $set: { title, datetime, body } },
        { new: true }
      );
      res.status(200).send(updatePost);
    } catch (err) {
      res.status(500).send({ error: "Could not edit the post" });
    }
    next();
  });

  app.listen(PORT, (err) => {
    if (err) console.error(err.message);
    console.log(`Server running on port ${PORT}`);
  });
}
