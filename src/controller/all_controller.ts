import { Request, Response, NextFunction } from "express";
import { Noteschema } from "../schema/note_schema";
import { error } from "console";

export const createNote = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, data, heading, publishedDate } = req.body;

    if (!id || !heading || !data || !publishedDate) {
      res.status(400).json({ error: "fields are not fully filled" });
      return;
    }

    const newNote = new Noteschema({ id, data, heading, publishedDate });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ error: "Error creating note" });
  }
};

export const updateNote = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedNote = await Noteschema.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedNote) res.status(404).json({ error: "Note not found" });
    res.status(200).json(updatedNote);
    return;
  } catch (err) {
    res.status(500).json({ error: "Error while updating note" });
  }
};

export const deleteNote = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedNote = await Noteschema.findOneAndDelete({
      id: req.params.id,
    });
    if (!deletedNote) res.status(200).json({ error: "note not found" });
    res.status(404).json(deletedNote);
    return;
  } catch (err) {
    res.status(500).json({ error: "note not deleted." });
  }
};

export const getAllNotes = async (req: Request, res: Response) => {
  try {
    const notes = await Noteschema.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: "Error fetching notes" });
  }
};

export const noteByid = async (req: Request, res: Response): Promise<void> => {
  try {
    const note = await Noteschema.findOne({ id: req.params.id });
    if (!note) res.status(404).json({ error: "Note not found" });
    res.status(200).json(note);
    return;
  } catch (err) {
    res.status(500).json({ error: "Error fetching note" });
  }
};
