import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

export const Connection = () => {
  const MONGODB_URI = "mongodb://localhost:27017";
 
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });
  mongoose.connection.on("error", (error) => {
    console.log("error while connecting with the database", error.message);
  });
};
export default Connection;
