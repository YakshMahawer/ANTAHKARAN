const express = require('express');
const app = express();
const connectDB = require("./db/connection");
require("dotenv").config();

app.get('/test', (req,res) => {
    res.json({
        "head": ["Yaksh", "Yash"]
    });
});

const port = 8000;

const start = async () => {
  await connectDB(process.env.MONGO_URI)
    .then(() => {
      console.log("Database Connected Successfully");
      app.listen(port, () => {
        console.log(`Server is listening at port ${port}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

start();
