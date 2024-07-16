import "./Header.css";
import Boton from "../Boton"; // Asegúrate de que la ruta sea correcta

function Header({ cambiarMostrarFormularioVideo }) {
    return (
        <header className="header">
            <img src="logo.png" alt="Org" className="logo" />
            <div className="nav-buttons">
                <Boton>Home</Boton>
                <Boton onClick={cambiarMostrarFormularioVideo}>Nuevo Video</Boton>
            </div>
        </header>
    );
}

export default Header;