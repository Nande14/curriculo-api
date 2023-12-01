const validateFieldNome = (request, response, next) => {
    const { body } = request;

    if (body.nome == undefined) {
        return response.status(400).json({ message: 'O campo "nome" é obrigatório' });
    }

    if (body.nome == '') {
        return response.status(400).json({ message: 'Nome não pode ser vazio' });
    }

    next();
};

const validateFieldDescricao = (request, response, next) => {
    const { body } = request;

    if (body.descricao == undefined) {
        return response.status(400).json({ message: 'O campo "descricao" é obrigatório' });
    }

    if (body.descricao == '') {
        return response.status(400).json({ message: 'Descricão não pode ser vazio' });
    }

    next();
};

const validateFieldHabilidades = (request, response, next) => {
    const { body } = request;

    if (body.habilidades == undefined) {
        return response.status(400).json({ message: 'O campo "habilidades" é obrigatório' });
    }

    if (body.habilidades == '') {
        return response.status(400).jason({message: 'Habilidades não pode ser vazio'});
    }

    next();
};

module.exports = {
    validateFieldNome,
    validateFieldDescricao,
    validateFieldHabilidades,
};
