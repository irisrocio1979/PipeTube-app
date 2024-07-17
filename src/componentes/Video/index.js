import { useState } from "react";
import "./Video.css";
import EditarVideo from "../EditarVideo"; 
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart, AiFillEdit } from "react-icons/ai";

const Video = (props) => {
    const {titulo, categoria, urlImagen, urlVideo, descripcion, id, fav, editarVideo } = props.datos;
    const { colorPrimario, eliminarVideo, like } = props;

    const [isEditing, setIsEditing] = useState(false);

    const handleSave = (datosActualizados) => {
        if (typeof editarVideo === 'function') {
            editarVideo(id, datosActualizados); 
        } else {
            console.error("editarVideo no es una función");
        }
    };

    return (
        <div className="video">
            {fav ? <AiFillHeart color="red" className="favorito" onClick={() => like(id)} /> : <AiOutlineHeart className="favorito" onClick={() => like(id)} />}
            <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
                <a href={urlVideo} target="_blank" rel="noopener noreferrer">
                    <img src={urlImagen} alt={titulo} />
                </a>
            </div>
            <div className="info">
                {isEditing ? (
                    <EditarVideo
                        id={id}
                        titulo={titulo}
                        categoria={categoria}
                        urlImagen={urlImagen}
                        urlVideo={urlVideo}
                        descripcion={descripcion}
                        onClose={() => setIsEditing(false)}
                        onSave={handleSave}
                    />
                ) : (
                    <>
                        <h4>{titulo}</h4>
                        <p>{descripcion}</p>
                    </>
                )}
                <div className="acciones">
                    <span onClick={() => setIsEditing(true)} className="accion">
                        <AiFillEdit /> EDITAR
                    </span>
                    <span onClick={() => eliminarVideo(id)} className="accion">
                        <AiFillCloseCircle /> ELIMINAR
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Video;
