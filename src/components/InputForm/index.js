import { useState } from 'react';
import './InputForm.css';

const InputForm = (props) => {
    const placeholderModificado = `${props.placeholder}...`;

    const {type = 'text'} = props;

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return (
        <div className="input-form">
            <label>{props.titulo}</label>
            <input 
                placeholder={placeholderModificado} 
                required={props.required} 
                value={props.valor}
                onChange={manejarCambio}
                type={type}
            />
        </div>
    )
}

export default InputForm;