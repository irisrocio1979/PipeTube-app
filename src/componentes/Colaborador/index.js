import { useState } from "react";
import "./Video.css";
import EditarVideo from "../EditarVideo"; // Asegúrate de tener esta importación
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart, AiFillEdit } from "react-icons/ai";

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav, editarColaborador } = props.datos;
    const { colorPrimario, eliminarColaborador, like } = props;

    const [isEditing, setIsEditing] = useState(false);

    const handleSave = (datosActualizados) => {
        console.log("Editar Colaborador en Colaborador:", editarColaborador);

        if (typeof editarColaborador === 'function') {
            editarColaborador(id, datosActualizados); // Verifica que esto se llame correctamente
        } else {
            console.error("editarColaborador no es una función");
        }
    };

    return (
        <div className="video">
            {fav ? <AiFillHeart color="red" className="favorito" onClick={() => like(id)} /> : <AiOutlineHeart className="favorito" onClick={() => like(id)} />}
            <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
                <img src={foto} alt={nombre} />
            </div>
            <div className="info">
                {isEditing ? (
                    <EditarVideo
                        id={id}
                        nombre={nombre}
                        puesto={puesto}
                        foto={foto}
                        equipo={equipo}
                        onClose={() => setIsEditing(false)}
                        onSave={handleSave}
                    />
                ) : (
                    <>
                        <h4>{nombre}</h4>
                        <h5>{puesto}</h5>
                    </>
                )}
                <div className="acciones">
                    <span onClick={() => setIsEditing(true)} className="accion">
                        <AiFillEdit /> EDITAR
                    </span>
                    <span onClick={() => eliminarColaborador(id)} className="accion">
                        <AiFillCloseCircle /> ELIMINAR
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Colaborador;