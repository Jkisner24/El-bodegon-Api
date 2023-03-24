const { Router } = require("express");
const { getUsers, createUsers, getUserById, updateUserById, updateUserCart } = require("../handlers/usersHandlers");


const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/", createUsers);
usersRouter.put("/:id", updateUserById)
// usersRouter.put('/cart', updateUserCart)

module.exports = usersRouter;