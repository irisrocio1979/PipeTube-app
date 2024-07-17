import "./Boton.css"

const Boton = (props) => {
    return <button className="boton" onClick={props.onClick}>{props.children}</button>
}

export default Boton