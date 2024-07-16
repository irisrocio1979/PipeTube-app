import "./Footer.css";

const Footer = () => {
    return (
        <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
            <div className='redes'>
                <a href='https://www.aluracursos.com/' aria-label="Facebook">
                    <img src="/iconos/f.png" alt='Facebook' />
                </a>
                <a href='https://www.aluracursos.com/' aria-label="Twitter">
                    <img src="/iconos/tw.png" alt='Twitter' />
                </a>
                <a href='https://www.aluracursos.com/' aria-label="Instagram">
                    <img src="/iconos/in.png" alt='Instagram' />
                </a>
            </div>
            <strong>Desarrollado por Alura</strong>
            <img src='logo.png' alt='org' className='logo' />
        </footer>
    );
}

export default Footer;

