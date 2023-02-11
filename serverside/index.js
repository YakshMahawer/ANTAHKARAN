const express = require('express');
const app = express();
const connectDB = require("./db/connection");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const twilioRouter= require('./routes/twilio-sms');
const adminauth = require("./routes/adminauth")

app.get('/test', (req,res) => {
    res.json({
        "head": ["Yaksh", "Yash"]
    });
});

const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(cors());
app.use("/twilio-sms", twilioRouter);
app.use("/admin",adminauth);

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
