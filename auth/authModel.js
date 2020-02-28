const db = require('../database/dbConfig.js');

module.exports = {
    register,
    findBy
};
function register(newUser){
    return db('users')
        .insert(newUser, 'id')
};
function findBy(username){
    return db('users')
        .where(username)
};
