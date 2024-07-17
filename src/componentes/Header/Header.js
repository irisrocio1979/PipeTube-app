import { useState } from "react"
import "./Header.css";
import Boton from "../Boton";

const Header = (props) => {
    console.log(props)
    return (
        <header className="header">
            <img src="logo.png" alt="Org" className="logo" />
            <div className="nav-buttons">
                <Boton>Home</Boton>
                <Boton alt="add" onClick={props.cambiarMostrar}>Nuevo Video</Boton>
            </div>
        </header>
    );
}

export default Header;