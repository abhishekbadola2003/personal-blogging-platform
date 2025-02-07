"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const all_controller_1 = require("../controller/all_controller");
const router = express_1.default.Router();
router.post("/create", all_controller_1.createNote);
router.put("/:id", all_controller_1.updateNote);
router.delete("/delete/:id", all_controller_1.deleteNote);
router.get("/get-all", all_controller_1.getAllNotes);
router.get("/note-by-id/:id", all_controller_1.noteById);
exports.default = router;
