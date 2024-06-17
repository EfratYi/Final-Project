const express = require("express");
const router = express.Router();
const controller=require('../controllers/disabledQueuasController')
router.use (express.json());
router.use(express.urlencoded({ extended: true }));
const cors = require('cors'); 
router.use(cors());


router.get("/", async(req, res) => {
    try{

    const disabledQueuas = await controller.getDisabledQueuas();
    res.status(201).send(disabledQueuas)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
});

router.post('/', async (req, res) => {
    const response = await controller.createDisabledQueuas( req.body.date,req.body.hour)
    res.status(201).send(await controller.getDisabledQueuas())
})



router.delete("/:id",async(req,res)=>{
    const response = await controller.deleteDisabledQueuas(req.params.id)
    res.status(201).send(await controller.getDisabledQueuas())
})

module.exports = router