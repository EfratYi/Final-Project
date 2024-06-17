const express = require("express");
const router = express.Router();
const controller=require('../controllers/galleryController')
router.use (express.json());
router.use(express.urlencoded({ extended: true }));
const cors = require('cors'); 
router.use(cors());


router.get("/", async(req, res) => {
    try{

    const gallery = await controller.getGallery();
    res.status(201).send(gallery)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
});

router.post('/', async (req, res) => {
    const response = await controller.createPhoto( req.body.imageUrl)
    res.status(201).send(await controller.getGallery())
})



router.delete("/:id",async(req,res)=>{
    const photoId = req.params.id;
    const response = await controller.deletePhoto(photoId)
    res.status(201).send(await controller.getGallery())
})

module.exports = router
