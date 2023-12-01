const curriculoModels = require('../models/curriculoModels');

const getAll = async (_request, response) => {
    const curriculos = await curriculoModels.getAll();
    return response.status(200).json(curriculos);
};

const createCurriculo = async (request, response) => {
    const createCurriculo = await curriculoModels.createCurriculo(request.body);
    return response.status(201).json(createCurriculo);
};

const deleteCurriculo = async (request, response) => {
    const { id } = request.params;
    await curriculoModels.deleteCurriculo(id);
    return response.status(204).json();
};

const updateCurriculo = async (request, response) => {
    const { id } = request.params;
    await curriculoModels.updateCurriculo(id, request.body);
    return response.status(204).json();
};

module.exports = {
    getAll,
    createCurriculo,
    deleteCurriculo,
    updateCurriculo,
};
