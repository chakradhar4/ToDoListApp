import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME; 
const PASSWORD = process.env.DB_PASSWORD;


export const connection = () => {
  const MONGODB_URI ='mongodb+srv://${USERNAME}:${PASSWORD}@todo.nhsc2wn.mongodb.net/?retryWrites=true&w=majority';
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Databse disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("error while connecting with the database");
  });
};
export default connection;
