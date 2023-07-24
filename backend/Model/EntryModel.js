import mongoose, { mongo } from "mongoose";

    //* title, room, image, content (text)
const entrySchema = new mongoose.Schema({

    title: {
        type: String,
        maxlength: 30,
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
        required: false
    },
    content: {
        type: String,
        required: true
    }

})

export const Entry = mongoose.model("Entry", entrySchema)