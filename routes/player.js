const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/:player', ctrl.player.getPlayerById);
router.put('/:playerId', ctrl.player.editPlayer);
router.delete('/:playerId', ctrl.player.deletePlayer);

module.exports = router;