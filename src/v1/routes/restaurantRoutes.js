const express = require("express");
const restaurantController = require("../../controllers/restaurantController")
const router = express.Router();

router
    .get('/', restaurantController.getAllRestaurants)

    .get('/:restaurantId', restaurantController.getOneRestaurant)

    .post('/:restaurantId', restaurantController.createNewRestaurant)

    .patch('/:restaurantId', restaurantController.updateOneRestaurant)

    .delete('/:restaurantId', restaurantController.deleteOneRestaurant)

module.exports = router;