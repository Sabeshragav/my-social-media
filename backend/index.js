// const express = require("express");
// const mongoose = require("mongoose");
// const postSchema = require("./postSchema");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 8000;

// app.use(cors());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// main().catch((err) => console.error(err));

// async function main() {
//   // await mongoose.connect(process.env.MONGO_URL);
//   await mongoose.connect(
//     "mongodb+srv://sabeshragav289:4YTPYt3jlKI5WXon@cluster0.g77wa.mongodb.net/social_media?retryWrites=true&w=majority"
//   );

//   //Server online
//   app.get("/", (req, res) => {
//     res.json("Server Online");
//   });

//   //fetching all posts
//   app.get("/posts", async (req, res, next) => {
//     try {
//       const reqPosts = await postSchema.find();
//       res.status(200).send(reqPosts);
//     } catch (err) {
//       res.status(500).send("Cant fetch posts");
//     }
//     next();
//   });

//   // Deleting a post
//   app.delete("/posts/:id", async (req, res, next) => {
//     try {
//       await postSchema.deleteOne({ _id: req.params.id });
//       res.status(200).send({ message: "Post deleted" });
//     } catch (err) {
//       res.status(500).send({ error: "Could not delete post" });
//     }
//     next();
//   });

//   // adding a post
//   app.post("/posts", async (req, res, next) => {
//     try {
//       const { title, datetime, body } = req.body;
//       const newPost = await postSchema.create({
//         title,
//         datetime,
//         body,
//       });

//       res.status(200).send(newPost);
//     } catch (err) {
//       res.status(500).send({ error: "Could not add the post" });
//     }
//     next();
//   });

//   // editing a post
//   app.put("/posts/:id", async (req, res, next) => {
//     try {
//       const { title, datetime, body } = req.body;
//       const updatePost = await postSchema.findByIdAndUpdate(
//         req.params.id,
//         { $set: { title, datetime, body } },
//         { new: true }
//       );
//       res.status(200).send(updatePost);
//     } catch (err) {
//       res.status(500).send({ error: "Could not edit the post" });
//     }
//     next();
//   });

//   // app.listen(PORT, (err) => {
//   //   if (err) console.error(err.message);
//   //   console.log(`Server running on port ${PORT}`);
//   // });
// }
// module.exports = app;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: ["https://deploy-mern-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

mongoose.connect(
  "mongodb+srv://yousaf:test123@cluster0.g4i5dey.mongodb.net/test?retryWrites=true&w=majority"
);

app.get("/", (req, res) => {
  res.json("Hello");
});
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  RegisterModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.json("Already have an account");
      } else {
        RegisterModel.create({ name: name, email: email, password: password })
          .then((result) => res.json(result))
          .catch((err) => res.json(err));
      }
    })
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running");
});
