const DB = require("./db.json")

const getAllUsers = () => {
    return DB.users;
};

module.exports = { getAllUsers };