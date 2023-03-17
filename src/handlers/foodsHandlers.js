const Food = require('../models/Food')
const {getFoodByName} = require('../controllers/foodsControllers')
const { uploadImage } = require('../libs/cloudinary');
const fs = require('fs-extra')

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
    const {id} = req.params;
    try {
        const foodById = await Food.findById(id);
        res.status(200).send(foodById)  
    } 
    catch (error) {
        res.status(400).send(error.message)
    }
}

const createFood = async (req, res) => {
    try {
        const {name, price, description, category} = req.body;
        let image;
        if(req.files.image){
            const res = await uploadImage(req.files.image.tempFilePath);
            image = {
                url: res.secure_url,
                public_id: res.public_id
            };
            await fs.remove(req.files.image.tempFilePath)
        };


        const newFood = new Food({name, price, description, category, image });
        await newFood.save();
        res.status(201).send(newFood);
    } 
    catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
}

const updateFood = async (req, res) => {
    const {id} = req.params;
    const {name, price, description, image, category} = req.body
    const preUpdatedFood = {
        name,
        price, 
        description, 
        image, 
        category
    }
    try {
        const updatedFood = await Food.updateOne({_id: id}, { $set: preUpdatedFood });
        res.status(200).send(updatedFood)
    } 
    catch (error) {
        res.status(400).send(error.message)
    }
}

const deleteFood = async (req, res) => {
    const { id } = req.params
    try {
        const postRemoved = await Food.findByIdAndDelete(id);
        if(!postRemoved) throw new Error("No encontre nada pa");
        await deleteImage(postRemoved.image.public_id)
        res.status(200).send("se borro peola")
    } 
    catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = {
    getFoods,
    getFoodById,
    createFood,
    updateFood
}