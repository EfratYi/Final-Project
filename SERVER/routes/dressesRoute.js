const express = require("express");
const router = express.Router();
const controller=require('../controllers/dressesController')
router.use (express.json());
router.use(express.urlencoded({ extended: true }));
const cors = require('cors');
router.use(cors());

router.get("/", async(req, res) => {
    res.status(201).send(await controller.getAllDresses())
});

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const Dress = await controller.getDress(id);
     res.status(201).send(Dress)
});

router.post('/', async (req, res) => {
    const response = await controller.createDress( req.body.model,req.body.price,req.body.uses,req.body.advancePayment)
    res.status(201).send(await controller.getAllDresses())
    // res.status(201).send("postcreatDressController succeed")
})

router.put("/:id",async(req,res)=>{
    const id= req.params.id
    const response = await controller.updateDress(id,req.body.model,req.body.price,req.body.uses,req.body.advancePayment)
    res.status(201).send(await controller.getAllDresses())
})

router.delete("/:id",async(req,res)=>{
    const response = await controller.deleteDress(req.params.id)
    res.status(201).send("deletecreatDress succeed")
})

module.exports = router