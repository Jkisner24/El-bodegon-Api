const { Router } = require("express");
const { notificacion } = require("../handlers/notificacionMpHandler");


const notificacionRouter = Router();
notificacionRouter.post("/", notificacion)

module.exports = notificacionRouter;