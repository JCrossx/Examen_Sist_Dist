const Restaurant = require("../database/Restaurant")

const getAllRestaurants = () => {
    const allRestaurants = Restaurant.getAllRestaurants;
    return allRestaurants;
};
const getOneRestaurant = () => {
    return;
};
const createNewRestaurant = () => {
    return;
};
const updateOneRestaurant = () => {
    return;
};
const deleteOneRestaurant = () => {
    return;
};

module.exports = {
    getAllRestaurants,
    getOneRestaurant,
    createNewRestaurant,
    updateOneRestaurant,
    deleteOneRestaurant
}