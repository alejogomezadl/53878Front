
import { useState } from 'react'
import { getUsers, setUsers } from '../api/Servicios'
import Lista from '../components/List';


const Usuarios = () => {

    const [listUsers, setListUsers] = useState([]);



    const traerUsuarios = () => {
        getUsers().then(
            (resp) => {
                let lista = resp.data.results
                console.log(lista);
                setListUsers(lista)
            }
        )

    }


    const enviarUsuarios = (eve) => {
        eve.preventDefault();


        let body =
        {
            "name": eve.target.nombre.value,
            "lastName": eve.target.apellido.value,
            "document": eve.target.documento.value,
            "edad": parseInt(eve.target.edad.value)
        }
        setUsers(body).then(
            (resp) => {
                console.log(resp);
            }
        )

    }

    return (
        <div>


            <form onSubmit={enviarUsuarios}>
                <label>Nombre :</label>   <input type="text" name="nombre" />
                <br/>
                <label>Apellido :</label>   <input type="text" name="apellido" />
                <br/>
                <label>documento :</label>   <input type="text" name="documento" />
                <br/>
                <label>edad :</label>   <input type="text" name="edad" />
                <br/>
                <button type="submit"> Enviar</button>
                <br/>
            </form>

            <button onClick={traerUsuarios}>Invocar</button>
            <Lista usuarios={listUsers} />
        </div>
    )

}

export default Usuarios