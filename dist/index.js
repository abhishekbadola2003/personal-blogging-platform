"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notes_routes_1 = __importDefault(require("../src/routes/notes_routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/notes", notes_routes_1.default);
app.listen(4000, () => {
    console.log("server started running on port 4000");
});
// app.get("/", (req, res) => {
//   res.send("server running successfullly");
// });
const mongo_uri = "mongodb+srv://abhishekbadola28:BRW2DTg8wfAw8pbY@backenddb.pufgh.mongodb.net/";
mongoose_1.default.Promise;
mongoose_1.default.connect(mongo_uri);
mongoose_1.default.connection.on("error", (error) => console.log(error));
