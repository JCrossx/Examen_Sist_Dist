const User = require("../database/User")

const getAllUsers = () => {
    const allUsers = User.getAllUsers;
    return allUsers;
};
const getOneUser = () => {
    return;
};
const createNewUser = () => {
    return;
};
const updateOneUser = () => {
    return;
};
const deleteOneUser = () => {
    return;
};

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}