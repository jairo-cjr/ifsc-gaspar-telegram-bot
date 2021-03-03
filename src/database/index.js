const mongoose = require("mongoose");

const { MONGO_URL } = require("../modules/config");

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("💾 Is connected.");
});

module.exports = mongoose;
