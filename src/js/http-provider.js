
const urlUsers='https://reqres.in/api/users?page=2';



//centralizar peticiones.

const obtenerUsers= async ()=>{
    const resp = await fetch(urlUsers);
    const {data:users} = await resp.json();
    return users;
};


export{
    
    obtenerUsers
}