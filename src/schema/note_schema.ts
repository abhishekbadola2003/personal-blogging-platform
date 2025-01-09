import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
  },

  heading: {
    type: String,
    required: true,
  },

  data: {
    type: String,
    required: true,
  },

  publishedDate: {
    type: Date,
    required: true,
  },
});

export const NoteSchema = mongoose.model("NoteSchema", noteSchema);
