import { useEffect, useState } from "react";




const Metricas = () => {


  
    const [registros, setregistros] = useState([])



    const enviar = (evt) => {

        evt.preventDefault();

     
        let actual = registros;
 debugger
        actual.push({
            "documento": evt.target.nombre.value,
            "nombre": evt.target.apellido.value,
            "apellido": evt.target.documento.value,
            "edad": evt.target.edad.value
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
        </div>
    )

}






export default Metricas;