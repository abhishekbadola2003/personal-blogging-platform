import express from "express";
import {
  createNote,
  updateNote,
  deleteNote,
  getAllNotes,
  noteByid,
} from "../controller/all_controller";

const router = express.Router();

router.post("/create", createNote);
router.put("/:id", updateNote);
router.delete("/delete/:id", deleteNote);
router.get("/getall", getAllNotes);
router.get("/notebyid/:id", noteByid);

export default router;
