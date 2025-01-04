"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteByid = exports.getAllNotes = exports.deleteNote = exports.updateNote = exports.createNote = void 0;
const note_schema_1 = require("../schema/note_schema");
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, data, heading, publishedDate } = req.body;
        if (!id || !heading || !data || !publishedDate) {
            res.status(400).json({ error: "fields are not fully filled" });
            return;
        }
        const newNote = new note_schema_1.Noteschema({ id, data, heading, publishedDate });
        yield newNote.save();
        res.status(201).json(newNote);
    }
    catch (err) {
        res.status(500).json({ error: "Error creating note" });
    }
});
exports.createNote = createNote;
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedNote = yield note_schema_1.Noteschema.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!updatedNote)
            res.status(404).json({ error: "Note not found" });
        res.status(200).json(updatedNote);
        return;
    }
    catch (err) {
        res.status(500).json({ error: "Error while updating note" });
    }
});
exports.updateNote = updateNote;
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedNote = yield note_schema_1.Noteschema.findOneAndDelete({
            id: req.params.id,
        });
        if (!deletedNote)
            res.status(200).json({ error: "note not found" });
        res.status(404).json(deletedNote);
        return;
    }
    catch (err) {
        res.status(500).json({ error: "note not deleted." });
    }
});
exports.deleteNote = deleteNote;
const getAllNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield note_schema_1.Noteschema.find();
        res.status(200).json(notes);
    }
    catch (err) {
        res.status(500).json({ error: "Error fetching notes" });
    }
});
exports.getAllNotes = getAllNotes;
const noteByid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = yield note_schema_1.Noteschema.findOne({ id: req.params.id });
        if (!note)
            res.status(404).json({ error: "Note not found" });
        res.status(200).json(note);
        return;
    }
    catch (err) {
        res.status(500).json({ error: "Error fetching note" });
    }
});
exports.noteByid = noteByid;
