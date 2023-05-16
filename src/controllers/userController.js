const userService = require("../services/userService")

const getAllUsers = (req,res) =>{
    const AllUsers = userService.getAllUsers();
    res.send({ status: 'OK', data: AllUsers});
};

const getOneUser = (req,res) =>{
    const user = userService.getOneUser(req.params.userId);
    res.send(`Get user ${req.params.userId}`);
};

const createNewUser = (req,res) =>{
    const NewUser = userService.createNewUser(req.params.userId);
    res.send(`Create user ${req.params.userId}`);
};

const updateOneUser = (req,res) =>{
    const UpdatedUser = userService.updateOneUser(req.params.userId);
    res.send(`Update user ${req.params.userId}`);
};

const deleteOneUser = (req,res) =>{
    userService.deleteOneUser(req.params.userId);
    res.send(`Delete user ${req.params.userId}`);
};


module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}