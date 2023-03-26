const { createAuth0User } = require('../controllers/auth0UsersControllers')
const Auth0User = require('../models/Auth0User')

const getAuth0Users = async (req, res) => {
    try {
        const auth0users = await Auth0User.find()
        res.status(200).json(auth0users)
    } catch (error) {
        
    }
}

const getAuth0UserBySub = async (req, res) => {
    const {sub} = req.params
    console.log(sub);
    try {
        const auth0user = await Auth0User.find({sub: sub})
        res.status(200).json(auth0user)
    } catch (error) {
        
    }
}

const createAuth0Users = async (req, res) => {
    const { name, nickname, email, sub } = req.body;

    try {
        const newUser = await createAuth0User(name, nickname, email, sub);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    getAuth0Users,
    getAuth0UserBySub,
    createAuth0Users
}