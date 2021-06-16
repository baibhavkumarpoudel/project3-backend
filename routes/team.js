const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/profile', ctrl.team.getProfile);
router.put('/profile', ctrl.team.editProfile);

module.exports = router;