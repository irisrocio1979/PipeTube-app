import { useState } from "react"
import "./Catalogo.css"

const Catalogo = (props) => {
    //Estado - hooks
    //useState
    //const [nombreVariable,funcionActualiza] = useState(valorInicial)
    console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Catálogo</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default Catalogo