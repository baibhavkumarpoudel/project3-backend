const Team = require('../models').Team;
const Player = require('../models').Player;


const constants = require('../constants');

const getProfile = (req, res) => {
    
    Team.findByPk(req.user.id, {
        include: [
            {
                model: Player,
                attributes: ['id', 'name', 'age', 'position', 'teamId']
            }
        ],
        attributes: ['id', 'username', 'password', 'name', 'division', 'img'],
    })
    .then(userProfile => {
        res.status(constants.SUCCESS).json(userProfile)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editProfile = (req, res) => {
    Team.update(req.body, {
        where: {
            id: req.user.id
        },
        returning: true
    })
    .then(() => {
        Team.findByPk(req.user.id, {
            include: [
                {
                    model: Player,
                    attributes: ['id', 'name', 'age', 'position', 'teamId']
                }
            ],
            attributes: ['id', 'username', 'password', 'name', 'division', 'img'],
        })
        .then(userProfile => {
            res.status(constants.SUCCESS).json(userProfile)
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getProfile,
    editProfile
}