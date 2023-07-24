import express from "express"
import multer from "multer"
import { Entry } from "./Model/EntryModel.js"
import  "./Model/index.js"

const PORT = 3002;
const app = express();
const upload = multer({storage: multer.memoryStorage()});

app.use(express.json());

app.get("/all-entries", async (req, res) => {
    const data = await Entry.find()
    res.json(data)
})

app.get("/entry/:uid", async (req, res) => {
    const entryId = req.params.uid
    const entries = await Entry.findById( entryId)
    res.json(entries)
})

app.post("/new-entry", async(req, res) => {
    const entryResponse = await Entry.create(req.body)
    res.json(entryResponse)
})


app.listen(PORT, ()=>console.log(`Listening to ${PORT}`))