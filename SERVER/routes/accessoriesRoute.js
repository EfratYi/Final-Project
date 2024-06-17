const express = require("express");
const router = express.Router();
const controller=require('../controllers/accessoriesController')
router.use (express.json());
router.use(express.urlencoded({ extended: true }));
const cors = require('cors');
router.use(cors());

router.get("/", async(req, res) => {
   
    res.status(201).send(await controller.getAllAccessories())
});

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const Accessory = await controller.getAccessory(id);
     res.status(201).send(Accessory)
});

router.post('/', async (req, res) => {
    const response = await controller.createAccessory( req.body.type)
    // res.status(201).send(await controller.getAllTodos(req.body.userId))
    res.status(201).send(await controller.getAllAccessories())
})
///kt gucs
router.put("/:id",async(req,res)=>{
    const id= req.params.id
    const response = await controller.updateAccessory(id,req.body.type)
    res.status(201).send("updateQueue succeed ")
})

router.delete("/:id",async(req,res)=>{
    const response = await controller.deleteAccessory(req.params.id)
    res.status(201).send("deleteQueue succeed")
})

module.exports = router