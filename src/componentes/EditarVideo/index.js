import { useState } from "react"
import "./EditarVideo.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"


const EditarVideo = ({ id, titulo, categoria, urlImagen, urlVideo, descripcion, onClose, onSave }) => {
    const [nuevoTitulo, setNuevoTitulo] = useState(titulo);
    const [nuevaCategoria, setNuevaCategoria] = useState(categoria);
    const [nuevaUrlImagen, setNuevaUrlImagen] = useState(urlImagen);
    const [nuevaUrlVideo, setNuevaUrlVideo] = useState(urlVideo);
    const [nuevaDescripcion, setNuevaDescripcion] = useState(descripcion);

    const handleSave = () => {
        onSave(id, {
            titulo: nuevoTitulo,
            categoria: nuevaCategoria,
            urlImagen: nuevaUrlImagen,
            urlVideo: nuevaUrlVideo,
            descripcion: nuevaDescripcion
        });
        onClose();
    }

    return (
        <div className="editar-video-formulario">
            <h2>Editar Video</h2>
            <input type="text" value={nuevoTitulo} onChange={(e) => setNuevoTitulo(e.target.value)} />
            <input type="text" value={nuevaCategoria} onChange={(e) => setNuevaCategoria(e.target.value)} />
            <input type="text" value={nuevaUrlImagen} onChange={(e) => setNuevaUrlImagen(e.target.value)} />
            <input type="text" value={nuevaUrlVideo} onChange={(e) => setNuevaUrlVideo(e.target.value)} />
            <input type="text" value={nuevaDescripcion} onChange={(e) => setNuevaDescripcion(e.target.value)} />
            <button onClick={handleSave}>Guardar</button>
            <button onClick={onClose}>Cancelar</button>
        </div>
    );
}

export default EditarVideo;