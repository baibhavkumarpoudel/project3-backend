const Team = require('../models').Team;
const Player = require('../models').Player;


const getProfile = (req,res) => {
    Team.findByPk(req.params.index, {
        include: [Player]
    }).then(team => {
        res.render('team/profile.ejs', { team:team})
        })
}

const editProfile = (req,res) => {
    Team.update(req.body, {
        where: { id: req.params.index },
        returning: true
    }).then(team => {
        res.redirect('/profile'+req.params.index);
    })
}

module.exports = {
    getProfile,
    editProfile
}

