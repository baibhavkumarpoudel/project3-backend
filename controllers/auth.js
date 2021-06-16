const Team = require('../models').Team;

const signup = (req,res) => {
    Team.create(req.body).then(newTeam => {
        res.redirect(`/team/${newTeam.id}`)
    })
}

const login = (req,res)  => {
    Team.findOne({where: {username: req.body.username}}).then(user => {
        if(user.password === req.body.password){
            res.redirect(`/profile/${user.id}`)
        }else {
            res.redirect('/login')
        }
    })
}



module.exports = {
    signup,
    login
}