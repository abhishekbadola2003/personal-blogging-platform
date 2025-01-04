"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Noteschema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const noteSchema = new mongoose_1.default.Schema({
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
exports.Noteschema = mongoose_1.default.model("Noteschema", noteSchema);
