const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const cors = require('cors');

const app = express();
const routes = require('./routes');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/auth', routes.auth);
app.use('/player', routes.player);
app.use('/team', routes.team);

app.listen(3001, (req,res)=> {
    console.log("I'm listening ! ! !")
})

