import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 30,
        required: true
    },
    category: {
        type: String,
        enum: ['smallStuff', 'mediumStuff', 'bigStuff'],
        required: true
    },
    room: {
        type: String,
        maxlength: 30,
        required: true
    },
    image: {
        type: {
            url: String,
            imageId: String
        },
        required: true
    },
    content: {
        type: String,
        required: false
    }
});


export const Entry = mongoose.model("Entry", entrySchema);