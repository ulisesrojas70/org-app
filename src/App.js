import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

    const [mostrarFormulario, actualizarMostrar] = useState(false);

    const [colaboradores, actualizarColaboradores] =  useState([
        {
            id: uuidv4(),
            nombre: 'Ulises Rojas',
            puesto: 'Programador Junior',
            equipo: 'Front-End',
            foto: 'https://github.com/ulisesrojas70.png',
            fav: true
        },
        {
            id: uuidv4(),
            nombre: 'Christian',
            puesto: 'Gerente',
            equipo: 'Front-End',
            foto: 'https://github.com/ulises.png',
            fav: false
        },
        {
            id: uuidv4(),
            nombre: 'Carlos',
            puesto: 'Instructor',
            equipo: 'Front-End',
            foto: 'https://github.com/charly.png',
            fav: false
        },
        {
            id: uuidv4(),
            nombre: 'Robert',
            puesto: 'C.O.',
            equipo: 'Front-End',
            foto: 'https://github.com/robert1.png',
            fav: false
        },
        {
            id: uuidv4(),
            nombre: 'Ulises Rojas',
            puesto: 'Programador Junior',
            equipo: 'Programación',
            foto: 'https://github.com/ulisesrojas70.png',
            fav: true
        },
        {
            id: uuidv4(),
            nombre: 'Christian',
            puesto: 'Gerente',
            equipo: 'Programación',
            foto: 'https://github.com/ulises.png',
            fav: false
        },
        {
            id: uuidv4(),
            nombre: 'Carlos',
            puesto: 'Instructor',
            equipo: 'Programación',
            foto: 'https://github.com/charly.png',
            fav: false
        },
        {
            id: uuidv4(),
            nombre: 'Robert',
            puesto: 'C.O.',
            equipo: 'Programación',
            foto: 'https://github.com/robert1.png',
            fav: false
        }
    ]);

    const [equipos, actualizarEquipos] = useState ([
        {
            id: uuidv4(),
            titulo: 'Programación',
            colorPrimario: '#57C278',
            colorSecundario: '#D9F7E9'
        },
        {
            id: uuidv4(),
            titulo: 'Front-End',
            colorPrimario: '#82CFFA',
            colorSecundario: '#E8F8FF'
        },
        {
            id: uuidv4(),
            titulo: 'Data Science',
            colorPrimario: '#A6D157',
            colorSecundario: '#F0F8E2'
        },
        {
            id: uuidv4(),
            titulo: 'Devops',
            colorPrimario: '#E06B69',
            colorSecundario: '#FDE7E8'
        },
        {
            id: uuidv4(),
            titulo: 'UX y Diseño',
            colorPrimario: '#DB6EBF',
            colorSecundario: '#FAE9F5'
        },
        {
            id: uuidv4(),
            titulo: 'Móvil',
            colorPrimario: '#FFBA05',
            colorSecundario: '#FFF5D9'
        },
        {
            id: uuidv4(),
            titulo: 'Innovación y Gestión',
            colorPrimario: '#FF8A29',
            colorSecundario: '#FFEEDF'
        }
    ]);

    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario);
    }

    //Registrar colaborador 
    const registrarColaborador = (colaborador) => {
        console.log('Se registro', colaborador);
        //Spread operator
        actualizarColaboradores([...colaboradores, colaborador]);
    }

    //Eliminar colaborador
    const eliminarColaborador = (id) => {
        const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
        actualizarColaboradores(nuevosColaboradores);
    }

    //Actualizar color de equipo
    const actualizarColor = (color, id) => {
        const equiposActualizados = equipos.map((equipo) => {
            if (equipo.id === id) {
                equipo.colorPrimario = color;
            }
            
            return equipo;
        });
        actualizarEquipos(equiposActualizados);
    }

    //Crear equipo
    const crearEquipo = (nuevoEquipo) => {
        console.log(nuevoEquipo);
        actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
    }

    const like = (id) => {
        const colaboradoresActualizados = colaboradores.map((colaborador) => {
            if( colaborador.id === id) {
                colaborador.fav = !colaborador.fav;
            }
           return colaborador;
        })

        actualizarColaboradores(colaboradoresActualizados);
    }

    return (
        <div>
            <Header/>
            {/*mostrarFormulario ? <Formulario/> : <></>*/}
            {
                mostrarFormulario && <Formulario 
                    equipos = {equipos.map((equipo) => equipo.titulo)}
                    registrarColaborador = {registrarColaborador}
                    crearEquipo={crearEquipo}
                />
            }
            <MiOrg cambiarMostrar={cambiarMostrar}/>
            {
                equipos.map((equipo) => <Equipo 
                    equipo={equipo} 
                    key={equipo.titulo}
                    colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
                    eliminarColaborador={eliminarColaborador}
                    actualizarColor={actualizarColor}
                    like={like}
                />)
            }
            <Footer/>
        </div>
    );
}

export default App;
