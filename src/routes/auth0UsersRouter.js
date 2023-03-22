const { Router } = require("express");
const { createAuth0Users } = require("../handlers/auth0UsersHandler");


const auth0UsersRouter = Router();

// auth0UsersRouter.get("/", getUsers);
// auth0UsersRouter.get("/:id", getUserById);
auth0UsersRouter.post("/", createAuth0Users);
// auth0UsersRouter.put("/:id", updateUserById)

module.exports = auth0UsersRouter;