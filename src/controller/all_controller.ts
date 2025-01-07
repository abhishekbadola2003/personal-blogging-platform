import { Request, Response } from "express";
import { NoteSchema } from "../schema/note_schema";

export const createNote = async (req: Request, res: Response) => {
  try {
    const { number, heading, data, publishedDate } = req.body;

    if (!number || !heading || !data || !publishedDate) {
      res.status(400).json({ error: "fields are not fully filled" });
      return;
    }

    const newNote = new NoteSchema({ number, heading, data, publishedDate });
    await newNote.save();
    console.log(`Saved note: ${newNote}`);

    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ error: "Error creating note" });
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const updatedNote = await NoteSchema.findOneAndUpdate(
      { id: req.params._id },
      req.body
    );
    if (!updatedNote) res.status(404).json({ error: "Note not found" });
    res.status(200).json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: "Error while updating note" });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const deletedNote = await NoteSchema.findOneAndDelete({
      id: req.params._id,
    });
    if (!deletedNote) res.status(404).json({ error: "note not found" });
    res.json({ message: "Blog deleted successfully", deletedNote });
  } catch (err) {
    res.status(500).json({ error: "note not deleted." });
  }
};

export const getAllNotes = async (req: Request, res: Response) => {
  try {
    const notes = await NoteSchema.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: "Error fetching notes" });
  }
};

export const noteById = async (req: Request, res: Response): Promise<void> => {
  try {
    const note = await NoteSchema.findOne({ id: req.params._id });
    if (!note) res.status(404).json({ error: "Note not found" });
    res.status(200).json(note);
    return;
  } catch (err) {
    res.status(500).json({ error: "Error fetching note" });
  }
};
