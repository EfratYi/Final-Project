// require('dotnev').config()
const express = require("express");
const cors = require('cors');
const router = express.Router();
const controller=require('../controllers/usersController')
// const jwt = require('jsonwebtoken')
router.use (express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cors());

router.post('/', async (req, res) => {
    try {
        const user = await controller.loginController(req.body.email, req.body.password);
        console.log(user+'ghghghjgjgiygfygy')
        if (user) {
         const userData=await controller.getUserById(user.id)

            res.status(200).send(userData);
        } else {
            res.status(401).send('Unauthorized');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});
module.exports = router