const validateFieldTitle = (request, response, next) =>{

    const { body } = request;

    if(body.title == undefined){
        return response.status(400).json({messege: 'The field "title" is requerid'});
    }

    if(body.title == ''){
        return response.status(400).json({messege: 'title cannot be empty'});
    }

    next();
};

const validateFieldStatus = (request, response, next) =>{

    const { body } = request;

    if(body.status == undefined){
        return response.status(400).json({messege: 'The field "status" is requerid'});
    }

    if(body.status == ''){
        return response.status(400).json({messege: 'status cannot be empty'});
    }

    next();
};

module.exports = {
    validateFieldTitle,
    validateFieldStatus,
};