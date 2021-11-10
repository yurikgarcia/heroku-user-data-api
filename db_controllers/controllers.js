const  db  = require("./dbConnection");

function getAllUsers() {
  return db
    .select("*")
    .from("users")
    .then((data) => data);
}
function getOneUserById(id){
  return db('users').where({id}).select('*').then(data=>data);
}

module.exports = { getAllUsers, getOneUserById };
