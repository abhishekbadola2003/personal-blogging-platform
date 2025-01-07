import express from "express";
import dotenv from "dotenv";
import notes_routes from "../src/routes/notes_routes";
import mongoose, { Mongoose } from "mongoose";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/notes", notes_routes);

//connect to db with error handling
// (async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI || "");
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.log("connection to database failed.");
//     process.exit(1);
//   }
// })();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started running on ${PORT} `);
  console.log("Connected to MongoDb ");
});

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("database connected");
  } catch (error) {
    console.log("error in connecting database");
    process.exit(1);
  }
})();
