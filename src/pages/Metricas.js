import { useState } from "react";




const Metricas = () => {


    const [nombre, setNombre] = useState("Alejo")
    const [Apellido, setApellido] = useState("")
    const [documento, setdocumento] = useState("")
    const [edad, setedad] = useState("")
    const [registros, setregistros] = useState([])

    const enviar = (evt) => {

        evt.preventDefault();

        setNombre(evt.target.nombre.value);
        setApellido(evt.target.apellido.value)
        setdocumento(evt.target.documento.value)
     
        let actual = registros;

        actual.push({
            "documento": documento,
            "nombre": nombre,
            "apellido": Apellido,
            "edad": edad
        })

        setregistros(actual)
        console.log(registros)

    }

    return (
        <div>

            <form onSubmit={enviar}>
                <label>Nombre :</label>   <input type="text" name="nombre" />
                <label>Apellido :</label>   <input type="text" name="apellido" />
                <label>documento :</label>   <input type="text" name="documento" />
                <label>edad :</label>   <input type="text" name="edad" />
                <button type="submit"> Enviar</button>
            </form>

            <div>



            </div>




        </div>
    )

}






export default Metricas;