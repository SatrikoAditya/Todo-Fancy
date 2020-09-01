function errorHandler (err, req, res, next) {
    console.log(err, '<<< dari error handler')

    let errors = []
    let statusCode = 500

    if(err.name == 'AUTHENTICATION_FAILED') {
        statusCode = 401
        errors.push('Failed to authenticate!')
    } else if(err.name === 'DATA_NOT_FOUND'){
        statusCode = 404
        errors.push('Data not found')
    } else if(err.name === 'AUTHORIZATION_FAILED') {
        statusCode = 403
        errors.push('Access Forbidden')
    } else if(err.name === 'SequelizeValidationError') {
        statusCode = 400
        err.errors.forEach(e => {
            errors.push(e.message)
        })
    } else if(err.name === 'LOGIN_FAILED') {
        statusCode = 400
        errors.push('Invalid email or password')
    }
     else {
        errors.push(err.msg)
    }

    res.status(statusCode).json({errors})

}

module.exports = errorHandler