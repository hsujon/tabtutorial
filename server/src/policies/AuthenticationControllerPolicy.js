const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const {error, value} = Joi.validate(req.body, schema)
        if(error) {
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'Password must contain both Capital and small latter and Number and between 8 to 32 letter'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid Registration information'
                    })
            }
        }else{
        next()
        }
    }
}