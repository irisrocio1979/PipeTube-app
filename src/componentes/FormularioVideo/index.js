// FormularioVideo.js
import { useState } from "react";
import "./FormularioVideo.css";

const FormularioVideo = ({ agregarNuevoVideo }) => {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        const nuevoVideo = {
            title: titulo,
            category: categoria,
            description: descripcion,
            image: imagen
        };
        agregarNuevoVideo(nuevoVideo);
        setTitulo("");
        setCategoria("");
        setDescripcion("");
        setImagen("");
    }

    return (
        <form className="formulario-video" onSubmit={manejarEnvio}>
            <h2>Agregar Nuevo Video</h2>
            <input 
                type="text" 
                placeholder="Título" 
                value={titulo} 
                onChange={(e) => setTitulo(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Categoría" 
                value={categoria} 
                onChange={(e) => setCategoria(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Descripción" 
                value={descripcion} 
                onChange={(e) => setDescripcion(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="URL de la Imagen" 
                value={imagen} 
                onChange={(e) => setImagen(e.target.value)} 
                required 
            />
            <button type="submit">Agregar Video</button>
        </form>
    );
}

export default FormularioVideo;
