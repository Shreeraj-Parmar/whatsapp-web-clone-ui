import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const ConnectionDb = async () => {
  const MongoURL = `mongodb+srv://${dbUsername}:${dbPassword}@weeby.maomviz.mongodb.net/?retryWrites=true&w=majority&appName=Weeby`;
  try {
    await mongoose.connect(MongoURL, { useUnifiedTopology: true });
    console.log("database connectedd to mongoURL");
  } catch (err) {
    console.log("error wile conneccting to database ", err.message);
  }
};

export default ConnectionDb;
