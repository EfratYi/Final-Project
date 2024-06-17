const express = require("express");
const router = express.Router();
const controller = require('../controllers/ordersController')
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const cors = require('cors');
router.use(cors());

router.get("/", async (req, res) => {
    try {
        const orders = await controller.getAllOrdrers();
        res.status(201).send(orders)
    }
    catch (err) {
        res.status(500).send(err)
    }
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const Dress = await controller.getOrdrer(id);
    res.status(201).send(Dress)
});

router.post('/', async (req, res) => {
    const response = await controller.createOrder(req.body.date, req.body.returnDate, req.body.clientId, req.body.dressId, req.body.repairs, req.body.paidInAdvance, req.body.accessoriesId)
    res.status(201).send(await controller.getAllOrdrers())
})

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const response = await controller.updateOrder(id, req.body.date, req.body.returnDate, req.body.clientId, req.body.dressId, req.body.repairs, req.body.paidInAdvance, req.body.accessoriesId)
    res.status(201).send(await controller.getAllOrdrers())
})

router.delete("/:id", async (req, res) => {
    const orderId = req.params.id;
    const response = await controller.deleteOrder(orderId)
    res.status(201).send(await controller.getAllOrdrers())
})

module.exports = router

