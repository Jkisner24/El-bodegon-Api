const { Router } = require("express");
const { payment } = require("../handlers/paymentHandlers");


const categoriesRouter = Router();
categoriesRouter.post("/", payment)

module.exports = categoriesRouter;