const { createAuth0User } = require('../controllers/auth0UsersControllers')

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
    createAuth0Users
}