const Player = require('../models').Player;
const constants = require('../constants');

const getPlayerById = (req, res) => {

    Player.findByPk(req.params.player, {
        include: [
            {
                model: Player,
                attributes: ['id', 'name', 'age', 'position', 'teamId'],
            }
        ],
 
    })
    .then(foundPlayer => {
        if(foundPlayer === null){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Player Id')
        }else{
            res.status(constants.SUCCESS).json(foundPlayer)
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editPlayer = (req, res) => {
    Player.update(req.body, {
        where: {
            id: req.params.playerId
        },
        returning: true
    })
    .then(updatedPlayer => {
        if(updatedPlayer[0] === 0) {
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
        }else{
            Player.findByPk(req.params.playerId, {
                include: [
                    {
                        model: Player,
                        attributes: ['id', 'name', 'age', 'position', 'teamId'],
                    }
                ]
            })
            .then(foundPlayer => {
                if(foundPlayer === null){
                    res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Player Id')
                }else{
                    res.status(constants.SUCCESS).json(foundPlayer)
                }
            })
            .catch(err => {
                res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
            })
        }
    })
}

const deletePlayer = (req, res) => {
    Player.destroy({
        where: {
            id: req.params.playerId
        }
    })
    .then(deletedPlayer => {
        console.log("Player Deleted")
        res.status(constants.SUCCESS).send('success')
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getPlayerById,
    editPlayer,
    deletePlayer
}