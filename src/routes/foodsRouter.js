const { Router } = require('express');
const { getFoods, createFood } = require('../handlers/foodsHandlers');


const foodsRouter = Router();

foodsRouter.get("/", getFoods )
foodsRouter.get("/:id",)

foodsRouter.post("/", createFood)
foodsRouter.put("/:id",)
foodsRouter.delete("/:id",)

module.exports = foodsRouter