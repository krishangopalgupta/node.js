const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://Gopalgupta:9758848365gopal@nodeproject.yohrcfl.mongodb.net/node-project?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

const connectDb = async (url) => {
  return mongoose.connect(connectionString, {});
};

module.exports = connectDb;
