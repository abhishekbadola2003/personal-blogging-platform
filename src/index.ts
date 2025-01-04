import express from "express";
import dotenv from "dotenv";
import notes_routes from "../src/routes/notes_routes";
import mongoose, { Mongoose } from "mongoose";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/notes", notes_routes);

app.listen(4000, () => {
  console.log(`server started running on port 4000`);
});

// app.get("/", (req, res) => {
//   res.send("server running successfullly");
// });
