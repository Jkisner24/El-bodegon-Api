const { Router } = require("express");
const { notificacion } = require("../handlers/notificacionMpHandler");


const categoriesRouter = Router();
categoriesRouter.post("/", notificacion)

module.exports = categoriesRouter;