//FILENAME : db.js

const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = 'mongodb://test1234:pass1234@cluster0-shard-00-00.nqvsp.mongodb.net:27017,cluster0-shard-00-01.nqvsp.mongodb.net:27017,cluster0-shard-00-02.nqvsp.mongodb.net:27017/amazon-price?ssl=true&replicaSet=atlas-x4nb7u-shard-0&authSource=admin&retryWrites=true&w=majority';

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;