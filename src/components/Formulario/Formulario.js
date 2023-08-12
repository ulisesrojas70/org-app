import './Formulario.css';
import InputForm from '../InputForm';
import SelectOptionForm from '../SelectOptionForm';
import Button from '../Button';

const Formulario = () => {
    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log(event);
    }
    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <InputForm titulo='Nombre' placeholder='Ingresar nombre' required/>
                <InputForm titulo='Puesto' placeholder='Ingresar titulo' required/>
                <InputForm titulo='Foto' placeholder='Ingresar enlace de foto' required/>
                <SelectOptionForm/>
                <Button>Crear</Button>
            </form>
        </section>
    )
}

export default Formulario;