import { useEffect, useState } from "react"


const Efecto = () => {
    const [titulo, setTitulo] = useState("")

    useEffect(
        () => {
            console.log("useEffect")
            document.title = `texto ${titulo}`
        }
    )

    return (

        <input value={titulo} onChange={(eve) => {
            setTitulo(eve.target.value)
        }} />
    )

}

export default Efecto