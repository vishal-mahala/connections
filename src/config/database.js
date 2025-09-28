const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://vishal_mahala24:Vishal%4007@namastenode.mef9z9z.mongodb.net/connections"
  );
};

module.exports = connectDB;
