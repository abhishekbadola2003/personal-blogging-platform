import express from "express";
import {
  createNote,
  updateNote,
  deleteNote,
  getAllNotes,
  noteById,
} from "../controller/all_controller";

const router = express.Router();

router.post("/create", createNote);
router.put("/:_id", updateNote);
router.delete("/delete/:_id", deleteNote);
router.get("/get-all", getAllNotes);
router.get("/note-by-id/:_id", noteById);

export default router;
