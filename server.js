import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import user from "./models/user.js";

const app = express();
const port = 3000;

// middle ware
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

    console.log("MongoDB Connected successfully");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

app.get("/user", async (req, res) => {
  try {
    const UserData = await user.find();
    res.send(UserData);
  } catch (error) {
    res.send("an error occured");
  }
});

// POST route to add a new user (without validation for testing)

app.post("/add_user", async (req, res) => {
  // console.log(req.body);
  const { name, email, password } = req.body;
  try {
    const UserData = await user.create({
      name: name,
      email: email,
      password: password,
    });
    res.send(UserData);
  } catch (error) {
    res.send("an error occured");
  }
});

// app.post("/add_user", (req, res) => {
//   res.send("add a new user to the database");
// });
app.put("/edit_user/:userid", async (req, res) => {
  // console.log(req.params);
  // console.log(req.body);
  const { userid } = req.params;
  const { name } = req.body;
  try {
    const UserData = await user.findByIdAndUpdate(
      // { _id: "66980899969dfdc3b466f8f3" },
      userid,
      { name: name },
      { new: true }
    );
    res.send(UserData);
  } catch (error) {
    res.send("an error occured");
  }
});
app.delete("/remove/:userid", async (req, res) => {
  const { userid } = req.params;
  try {
    const UserData = await user.findByIdAndDelete(userid);
    res.send("removed a user");
  } catch (error) {
    res.send("failed to remove a user");
  }
});

app.listen(port, () => {
  console.log(`express is live ${port}`);
});
connectDB();
