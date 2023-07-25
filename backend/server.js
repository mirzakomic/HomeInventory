import express from "express"
import multer from "multer"
import { Entry } from "./Model/EntryModel.js"
import  "./Model/index.js"
import { v2 as cloudinary } from "cloudinary";
import cors from 'cors';

const PORT = 3002;
const app = express();
const upload = multer({storage: multer.memoryStorage()});
          
cloudinary.config({ 
  cloud_name: 'djmepbwip', 
  api_key: '747323668788251', 
  api_secret: 'yHyNb8ztVt9x4yTnLKUd3PIeOc4' 
});

app.use(express.json());
app.use(cors());

app.get("/all-entries", async (req, res) => {
    const data = await Entry.find()
    res.json(data)
})

app.get("/entry/:uid", async (req, res) => {
    const entryId = req.params.uid
    const entries = await Entry.findById( entryId)
    res.json(entries)
})

// app.post("/new-entry", async(req, res) => {
//     const entryResponse = await Entry.create(req.body)
//     res.json(entryResponse)
// })

app.post("/new-entry", upload.single("image"), async (req, res) => {
    console.log(req.file);
    try {
      cloudinary.uploader
        .upload_stream(
          { resource_type: "image", folder: "InventoryImgs" },
          async (err, result) => {
            const response = await Entry.create({
              ...req.body,
              image: { url: result.secure_url, imageId: result.public_id },
            });
            res.json(response);
          }
        )
        .end(req.file.buffer);
    } catch (error) {
      console.error(error);
    }
  });

  app.delete("/delete-entry/:id", async (req, res) => {
    const itemID = req.params.id;
    try {
      const dataResponse = await Entry.findByIdAndRemove(itemID);
      cloudinary.uploader.destroy(dataResponse.image?.imageId)
      res.send("Gelöscht");
    } catch (error) {
      console.error(error);
      response.send("Error");
    }
  });



app.listen(PORT, ()=>console.log(`Listening to ${PORT}`))