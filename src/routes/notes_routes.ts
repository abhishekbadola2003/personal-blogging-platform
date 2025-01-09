import express from "express";
import {
  createNote,
  updateNote,
  deleteNote,
  getAllNotes,
  noteById,
} from "../controller/all_controller";

const router = express.Router();

router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.get("/", getAllNotes);
router.get("/:id", noteById);

export default router;
