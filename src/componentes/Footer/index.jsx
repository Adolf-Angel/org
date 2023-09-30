import "./Footer.css";

const Footer = ()=> {

    return <div className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.aluracursos.com/">
                <img src="/img/facebook.png" alt="facebook" />
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="/img/twitter.png" alt="twitter" />
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="/img/instagram.png" alt="instagram" />
            </a>

        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarollado por Alura</strong>


    </div>
}

export default Footer;