import { Request, Response } from "express";
import { NoteSchema } from "../schema/note_schema";
import { error } from "console";

export const createNote = async (req: Request, res: Response) => {
  try {
    const { number, heading, data, publishedDate } = req.body;
    const newNote = new NoteSchema({
      number,
      heading,
      data,
      publishedDate,
    });

    if (!number || !heading || !data || !publishedDate) {
      res.status(400).json({
        success: false,
        message: "fields are not fully filled",
        error,
      });
    }

    await newNote.save();
    // console.log(`Saved note: ${newNote}`);

    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ error: "Error creating note" });
    res.status(500).json({
      success: false,
      message: "Error creating note",
      error,
    });
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const updatedNote = await NoteSchema.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    if (!updatedNote) throw new Error("Note not found.");
    res.status(200).json(updatedNote);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error while updating note",
      error,
    });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const deletedNote = await NoteSchema.findOneAndDelete({
      _id: req.params.id,
    });
    if (!deletedNote) throw new Error("note not found");
    res.json({
      success: true,
      message: "Blog deleted successfully",
      data: deletedNote,
    });
  } catch (err) {
    res.status(500).json({
      success: true,
      message: "note not deleted.",
      error,
    });
  }
};

export const getAllNotes = async (req: Request, res: Response) => {
  try {
    const notes = await NoteSchema.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching notes",
      error,
    });
  }
};

export const noteById = async (req: Request, res: Response): Promise<void> => {
  try {
    const note = await NoteSchema.findOne({ _id: req.params.id });
    if (!note)
      res.status(404).json({
        success: false,
        message: "Note not found",
        error,
      });
    res.status(200).json(note);
    return;
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching note",
      error,
    });
  }
};
