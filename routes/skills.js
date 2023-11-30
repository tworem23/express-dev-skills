var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index);

//POST /skills/new
router.post('/', skillsCtrl.create);

router.get('/new', skillsCtrl.new);

router.get('/:id', skillsCtrl.show);

router.delete('/:id', skillsCtrl.delete);


module.exports = router;
