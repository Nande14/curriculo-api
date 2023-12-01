const express = require('express');
const router = express.Router();

const curriculoController = require('./controllers/curriculoController');
const curriculoMiddleware = require('./middlewares/curriculoMiddleware');

router.get('/curriculos', curriculoController.getAll);
router.post('/curriculos', curriculoMiddleware.validateFieldNome, curriculoMiddleware.validateFieldDescricao, curriculoMiddleware.validateFieldHabilidades, curriculoController.createCurriculo);
router.delete('/curriculos/:id', curriculoController.deleteCurriculo);
router.put('/curriculos/:id',curriculoMiddleware.validateFieldNome, curriculoMiddleware.validateFieldDescricao, curriculoMiddleware.validateFieldHabilidades, curriculoController.updateCurriculo);

module.exports = router;
