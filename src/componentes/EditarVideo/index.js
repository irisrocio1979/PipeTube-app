import { useState } from "react"
import "./EditarVideo.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"


const EditarVideo = ({ id, nombre, puesto, foto, equipo, onClose, onSave }) => {
    const [nuevoNombre, setNuevoNombre] = useState(nombre);
    const [nuevoPuesto, setNuevoPuesto] = useState(puesto);
    const [nuevaFoto, setNuevaFoto] = useState(foto);
    const [nuevoEquipo, setNuevoEquipo] = useState(equipo);

    const handleSave = () => {
        onSave(id, {
            nombre: nuevoNombre,
            puesto: nuevoPuesto,
            foto: nuevaFoto,
            equipo: nuevoEquipo
        });
        onClose();
    }

    return (
        <div className="editar-video-formulario">
            <h2>Editar Colaborador</h2>
            <input type="text" value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)} />
            <input type="text" value={nuevoPuesto} onChange={(e) => setNuevoPuesto(e.target.value)} />
            <input type="text" value={nuevaFoto} onChange={(e) => setNuevaFoto(e.target.value)} />
            <input type="text" value={nuevoEquipo} onChange={(e) => setNuevoEquipo(e.target.value)} />
            <button onClick={handleSave}>Guardar</button>
            <button onClick={onClose}>Cancelar</button>
        </div>
    );
}

export default EditarVideo;