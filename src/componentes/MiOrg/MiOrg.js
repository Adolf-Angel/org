import {useState} from "react";
 import "./MiOrg.css"

const MiOrg = (props) => {

    //Estado - hokoks
    //useState
    //useState()

    // const [nombreVariable, funcionActualiza] = useState(ValorInicial);
    // const [nombre, actualizarNombre] = useState("Harland");
    // const [mostrar, actualizarMostrar] = useState(true);


    //console.log(useState());

    // const manejarClick = () =>{
    //     console.log("monstrar / ocultar elemento" , !mostrar);
    //     actualizarMostrar(!mostrar);
    // }

    return <div className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="./img/Boton.png" alt="add" onClick={props.cambiarMostrar}/>
    </div>
}

export default MiOrg;