import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo/Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")


    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (e) => {
        //  console.log("manejar envio");
        e.preventDefault();
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        }
        registrarColaborador(datosEnviar);

    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2> Rellena el formulario para crear el colaborador </h2>
            <Campo titulo="Nombre"
                placeholder="Ingresa el nombre"
                required={true}
                valor={nombre}
                actualizarValor={actualizarNombre}
            />

            <Campo titulo="Puesto"
                placeholder="Ingresa puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />

            <Campo titulo="Foto"
                placeholder="Ingresa enlace de fotografia"
                required
                valor={foto}
                actualizarValor={actualizarFoto}

            />

            <ListaOpciones valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />

            <Boton texto="Crear" />

        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2> Rellena El Formulario para Crear el Equipo </h2>
            <Campo titulo="Titulo"
                placeholder="Ingresa el Titulo"
                required={true}
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />

            <Campo titulo="Color"
                placeholder="Ingresa el color en Hexadecimal"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton texto="Registrar Equipo" />
        </form>
    </section>
}

export default Formulario;