const Food = require('../models/Food')

const getFoods = async (req,res) => {
    try {
        const allFoods = await Food.find({});
        res.status(200).send(allFoods)
    } 
    catch (error) {
        res.status(400).send(error.message)
    }
}

const createFood = async (req, res) => {
    try {
        const {name, price, description, image, category} = req.body;
        const newFood = new Food({name, price, description, image, category });
        await newFood.save()
        res.status(201).send(`newFood`)
    } 
    catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = {
    getFoods,
    createFood
}