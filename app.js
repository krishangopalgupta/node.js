const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/routers");
const connectDb = require("./db/connect");
require("dotenv").config();

app.get("/api/v1/tasks", (req, res) => {
  res.send("hello world");
});

const start = async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`server is listening at port ${port}`);
    });
  } catch (error) {
    console.log("this is an error", error);
  }
};
start();
app.use("/api/v1/tasks", tasks);