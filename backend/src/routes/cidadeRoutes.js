const router = require('express').Router();
const c = require('../controllers/cidadeController');

router.get('/', c.listar);
router.post('/', c.criar);

module.exports = router;
