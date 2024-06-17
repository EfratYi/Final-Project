const express = require("express");
const router = express.Router();
const controller = require('../controllers/usersController')
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const cors = require('cors');
router.use(cors());


router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await controller.getUserById(id);
    res.status(201).send(user)
});

router.post('/', async (req, res) => {
    const response = await controller.postUserController(req.body.email,req.body.name, req.body.password,req.body.phone1, type)
    const user = await controller.getUserById(response);
    res.status(201).send(user);
})

router.delete("/:id", async (req, res) => {
    const response = await controller.deleteUser(req.params.id)
    res.status(201).send("deleting succeed")
})
// router.put("/:id", async (req, res) => {
//     const idUser = req.params.id;
//     const response = await controller.updateUserController(idUser, req.body.firstName, req.body.username, req.body.email, req.body.phone, req.body.address.street, req.body.address.city, req.body.address.zipcode)
//     res.status(201).send(await controller.getUserById(idUser))
// })


module.exports = router