import mongoose from "mongoose";

const wordsSchema = new mongoose.Schema({
    nonKanji: {
        type: String,
        required: true
    },
    romaji: {
        type: String,
        required: true
    },
    kanji: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
    },
    examples: {
        type: String,
        requred: true
    },
    level: {
        type: String,
        required: true
    },
    learned: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('Words', wordsSchema);