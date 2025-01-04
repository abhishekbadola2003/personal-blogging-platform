import express from "express";
import notes_routes from "../src/routes/notes_routes";
import mongoose, { Mongoose } from "mongoose";

const app = express();
app.use(express.json());
app.use("/notes", notes_routes);

app.listen(4000, () => {
  console.log("server started running on port 4000");
});

// app.get("/", (req, res) => {
//   res.send("server running successfullly");
// });

const mongo_uri =
  "mongodb+srv://abhishekbadola28:BRW2DTg8wfAw8pbY@backenddb.pufgh.mongodb.net/";
mongoose.Promise;
mongoose.connect(mongo_uri);
mongoose.connection.on("error", (error: Error) => console.log(error));
