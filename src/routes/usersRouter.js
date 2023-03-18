const { Router } = require("express");
const { getUsers, createUsers, getUserById, updateUserById } = require("../handlers/usersHandlers");


const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/", createUsers);
usersRouter.put("/:id", updateUserById)

module.exports = usersRouter;