const Player = require('../models').Player;

const getPlayerById = (req,res) => {
    Player.findByPk(req.params.index).then(player=> {
<<<<<<< HEAD
        res.send({player: player})
=======
        res.send( {player: player})
>>>>>>> 68178f7c499ceda84483a42bdef4f0affc225610
    })
}

const editPlayer = (req,res) => {

    Player.update(req.body, {
        where: {id: req.params.index },
        returning: true 
    }).then(player => {
            res.redirect('/player' + req.params.index)
    })
}

const deletePlayer = (req,res) => {
    Player.destroy({ where : { id: req.params.index}}).then(() => {
        res.redirect('/player')
    })
}

module.exports = {
    getPlayerById,
    editPlayer,
    deletePlayer
}