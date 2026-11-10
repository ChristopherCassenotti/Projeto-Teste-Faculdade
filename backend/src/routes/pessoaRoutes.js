const router = require('express').Router();
const c = require('../controllers/pessoaController');

router.get('/', c.listar);
router.get('/:id', c.buscar);
router.post('/', c.criar);
router.put('/:id', c.atualizar);
router.delete('/:id', c.excluir);

module.exports = router;
