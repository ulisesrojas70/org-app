import './SelectOptionForm.css';

const SelectOptionForm = (props) => {

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value);
    }

    return (
        <div className='lista-opciones'>
            <label>Equipo</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo...</option>
                {props.equipos.map((equipo, index) => {
                    return <option key={index} value={equipo}>{equipo}</option>
                })}
            </select>
        </div>
    )
}

export default SelectOptionForm;