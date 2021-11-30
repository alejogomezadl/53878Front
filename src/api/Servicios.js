const axios= require("axios");


const getUsers= ()=>{

     return axios.get("https://randomuser.me/api?results=46")

}

const setUsers= (body)=>{

    return axios.post("http://localhost:3001/usuarios/guardar",body)

}

module.exports = {getUsers, setUsers}