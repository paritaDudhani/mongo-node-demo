const joi = require('joi');

module.exports = (req, res, next) => {
    const Schema = joi.object().keys({
        title: joi.string().required(),
        status: joi.string().required(),
        taskId: joi.string().required()
    });
    
    const validation = Schema.validate(req.body);
    
    if (validation.error !== undefined) {
        res.status(400).send(validation.error.details);
    } else {
        next();
    }
}
