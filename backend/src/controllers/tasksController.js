const tasksModels = require('../models/tasksModels');

const getAll = async (_request, response) => {
    
    const tasks = await tasksModels.getAll();
    
    return response.status(200).json(tasks);
};

const createTasks = async (request, response) => {

const createTasks = await tasksModels.createTasks(request.body);
return response.status(201).json(createTasks);
};

const deleteTasks = async (request, response) => {
    const { id } = request.params;

    await tasksModels.deleteTasks(id);
    return response.status(204).json();
};

const updateTasks = async (request, response) => {
    
    const { id } = request.params;

    await tasksModels.updateTasks(id, request.body);
    return response.status(204).json();
};


module.exports = {
    getAll,
    createTasks,
    deleteTasks,
    updateTasks,
}