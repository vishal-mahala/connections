const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);

  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.find({ emailId: userEmail });

    res.send(user);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

connectDB()
  .then(() => {
    console.log("Database connection stablished...");
    app.listen(3000, () => {
      console.log("Server is successfully listening on port 3000...");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected!!");
  });
