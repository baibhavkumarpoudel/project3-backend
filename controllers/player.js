const Player = require('../models').Player;

const getPlayerById = (req,res) => {
    Player.findByPk(req.params.index).then(player=> {
        res.send( {player: player})
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