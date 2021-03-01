const mongoose = require("mongoose");

const { MONGO_URL } = require("../modules/config");

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose;
