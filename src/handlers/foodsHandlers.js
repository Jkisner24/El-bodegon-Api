const Food = require('../models/Food')
const {getFoodByName} = require('../controllers/foodsControllers')

const getFoods = async (req, res) => {
    try {
        const {name} = req.query
        const results = name 
        ? await getFoodByName(name)
        : await Food.find()
        res.status(200).send(results)
    } 
    catch (error) {
        res.status(400).send(error.message)
    }
}

const getFoodById = async (req, res) => {
    const {id} = req.params
    try {
        const foodById = await Food.findById(id);
        res.status(200).send(foodById)  
    } 
    catch (error) {
        res.status(400).send("algo no funca")
    }
}

const createFood = async (req, res) => {
    try {
        const {name, price, description, image, category} = req.body;
        const newFood = new Food({name, price, description, image, category });
        await newFood.save()
        res.status(201).send(newFood)
    } 
    catch (error) {
        res.status(404).send(error.message)
    }
}

const updateFood = async (req, res) => {
    const {id} = req.params;
    const {name, price, description, image, category} = req.body
    try {
        const updatedFood = await Food.updateOne({_id: id}, { $set: { name, price, description, image, category} });
        res.status(200).send(updatedFood)
    } 
    catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    getFoods,
    getFoodById,
    createFood,
    updateFood
}