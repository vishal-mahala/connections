const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.get("/user", (req, res) => {
  res.send({ firstName: "Vishal", lastName: "Mahala" });
});

app.post("/user", (req, res) => {
  res.send("Data successfully saved to the database");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfullyz");
});

app.get("/user/:userId", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Vishal", lastName: "Mahala" });
});

app.get("/hello", (req, res) => {
  res.send("Hello Hello Hello");
});

app.get("/test", (req, res) => {
  res.send("Testing the server");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
