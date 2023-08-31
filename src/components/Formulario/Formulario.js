import './Formulario.css';
import InputForm from '../InputForm';
import SelectOptionForm from '../SelectOptionForm';
import Button from '../Button';
import { useState } from 'react';

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const {registrarColaborador, crearEquipo} = props;
    
    const manejarEnvio = (event) => {
        event.preventDefault();

        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        
        registrarColaborador(datosAEnviar);
    } 
    
    const manejarNuevoEquipo = (event) => {
        event.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    }

    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <InputForm 
                    titulo='Nombre' 
                    placeholder='Ingresar nombre' 
                    required 
                    valor={nombre} 
                    actualizarValor={actualizarNombre}
                />
                <InputForm 
                    titulo='Puesto' 
                    placeholder='Ingresar titulo' 
                    required 
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />
                <InputForm 
                    titulo='Foto' 
                    placeholder='Ingresar enlace de foto' 
                    required 
                    valor={foto}
                    actualizarValor={actualizarFoto}
                />
                <SelectOptionForm
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                    equipos={props.equipos}
                />
                <Button>Crear</Button>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el aquipo.</h2>
                <InputForm 
                    titulo='Titulo' 
                    placeholder='Ingresar titulo' 
                    required 
                    valor={titulo} 
                    actualizarValor={actualizarTitulo}
                />
                <InputForm 
                    titulo='Color' 
                    placeholder='Ingresar el color en hexadecimal' 
                    required 
                    valor={color}
                    actualizarValor={actualizarColor}
                    type='color'
                />
                <Button>Registrar equipo</Button>
            </form>
        </section>
    )
}

export default Formulario;