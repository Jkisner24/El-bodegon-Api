const { Router } = require("express");

const { getUsers, createUsers, getUserById, updateUserById, compareLogin, updateUserCart } = require("../handlers/usersHandlers");



const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/", createUsers);
usersRouter.put("/:id", updateUserById)
usersRouter.put('/cart', updateUserCart)
usersRouter.post("/login", compareLogin)


module.exports = usersRouter;