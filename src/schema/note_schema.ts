import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  id: {
    type: String,
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
    type: String,
    required: true,
  },
});

export const Noteschema = mongoose.model("Noteschema", noteSchema);
