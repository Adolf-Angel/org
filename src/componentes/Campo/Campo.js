import { useState } from "react";
import "./Campo.css"

const Campo = (props) => {

   
    //console.log("datos: ", props.titulo);
    const placeholderModificado = `${props.placeholder}...`


    //destructuracion 
    const {type="text"} = props; 
    //en caso de ser indefinodo, podemos darle un valor por defecto
    

    const manejarCambio= (e) =>{
        // console.log("manejar cambio", e.target.value );
        props.actualizarValor(e.target.value);
    }

    
    return <div className={`campo campo-${type}` }> 
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} 
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        />
    </div>
}

export default Campo;