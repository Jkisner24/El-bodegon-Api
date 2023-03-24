const { Router } = require("express");
const { createAuth0Users, getAuth0Users, getAuth0UserBySub } = require("../handlers/auth0UsersHandler");


const auth0UsersRouter = Router();

auth0UsersRouter.get("/", getAuth0Users);
auth0UsersRouter.get("/:sub", getAuth0UserBySub);
auth0UsersRouter.post("/", createAuth0Users);
// auth0UsersRouter.put("/:id", updateUserById)

module.exports = auth0UsersRouter;