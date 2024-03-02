const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = () => {
    
    // console.log('MONGODB_URL:', MONGODB_URL);
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true, // Corrected option name
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`DB Connection Successfully`);
    })
    .catch((err) => {
      console.log(`DB Connection Failed`);
      console.error(err);
      process.exit(1);
    });
};
