

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

const app = express();
const routes = require('./routes');


app.use(bodyParser.json());



app.use('/auth', routes.auth);
app.use('/player', routes.player);
app.use('/team', routes.team);




app.listen(3000, (req,res)=> {
    console.log("I'm listening ! ! !")
})

