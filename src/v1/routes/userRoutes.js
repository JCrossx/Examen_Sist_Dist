const express = require("express");
const userController = require("../../controllers/userController")
const router = express.Router();

router
    .get('/', userController.getAllUsers)

    .get('/:userId', userController.getOneUser)

    .post('/:userId', userController.createNewUser)

    .patch('/:userId', userController.updateOneUser)

    .delete('/:userId', userController.deleteOneUser)

module.exports = router;