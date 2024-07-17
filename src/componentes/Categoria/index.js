import "./Categoria.css"
import Video from "../Video"
import hexToRgba from 'hex-to-rgba';

const Categoria = (props) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { videos, eliminarVideo, actualizarColor, like, editarVideo  } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }


    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {
            videos.length > 0 &&
            <section className="categoria" style={obj}>
                <input
                    type='color'
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="videos">
                    {
                        videos.map((video, index) => <Video
                            datos={video}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarVideo={eliminarVideo}
                            like={like}
                            editarVideo={editarVideo}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Categoria