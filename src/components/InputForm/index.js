import './InputForm.css';

const InputForm = (props) => {
    const placeholderModificado = `${props.placeholder}...`;
    return (
        <div className="input-form">
            <label>{props.titulo}</label>
            <input placeholder={placeholderModificado} required={props.required}/>
        </div>
    )
}

export default InputForm;