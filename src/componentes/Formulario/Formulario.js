import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [titulo, actualizarTitulo] = useState("");
    const [categoria, actualizarCategoria] = useState("");
    const [urlImagen, actualizarUrlImagen] = useState("");
    const [urlVideo, actualizarUrlVideo] = useState("");
    const [descripcion, actualizarDescripcion] = useState("");

    const [tituloCategoria, actualizarTituloCategoria] = useState("");
    const [color, actualizarColor] = useState("")

    const { registrarVideo, crearCategoria } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            titulo,
            categoria,
            urlImagen,
            urlVideo,
            descripcion
        }
        registrarVideo(datosAEnviar)
    }

    const manejarNuevoCategoria = (e) => {
        e.preventDefault()
        crearCategoria({ tituloCategoria, colorPrimario: color })
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Registrar nuevo Video</h2>
            <Campo
                titulo="Título"
                placeholder="Ingresar título"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="URL de Imagen"
                placeholder="Ingresar URL de la imagen"
                required
                valor={urlImagen}
                actualizarValor={actualizarUrlImagen}
            />
            <Campo
                titulo="URL del Video"
                placeholder="Ingresar URL del video"
                required
                valor={urlVideo}
                actualizarValor={actualizarUrlVideo}
            />
            <Campo
                    titulo="Descripción"
                    placeholder="Ingresar descripción"
                    required
                    valor={descripcion}
                    actualizarValor={actualizarDescripcion}
            /> 
            <ListaOpciones
                valor={categoria}
                actualizarValor={actualizarCategoria}
                categorias={props.categorias}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoCategoria}>
            <h2>Registrar nueva categoría</h2>
            <Campo
                titulo="Título de la Categoría"
                placeholder="Ingresar título"
                required
                valor={tituloCategoria}
                actualizarValor={actualizarTituloCategoria}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>Registrar categoria</Boton>
        </form>
    </section>
}

export default Formulario