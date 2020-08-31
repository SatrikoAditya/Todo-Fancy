const bcrypt = require('bcryptjs');

function hashPassword(password){
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

function comparePassword(password, hashingPass) {
    return bcrypt.compareSync(password, hashingPass);
}

module.exports = { hashPassword, comparePassword }
