import './Equipo.css';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructuracon: Evita repetir el codigo con el que se accede a los props -> props.equipo.----
    const {titulo, colorPrimario, colorSecundario, id} = props.equipo;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;

    const colorFondo = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estilosTitulo = {
        borderColor: colorPrimario,
    }

    return <>
        {   
            colaboradores.length > 0 &&
            <section className='equipo' style={colorFondo}>
                <input
                    type='color'
                    className='input-color'
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id);
                    }}
                />
                <h3 style={estilosTitulo}>{titulo}</h3>
                <div className='colaboradores'>
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;