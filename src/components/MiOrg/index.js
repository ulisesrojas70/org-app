import {useState} from 'react';
import './MiOrg.css';

const MiOrg = (props) => {
    return (
        <section className='org-section'>
            <h3 className='title'>Mi organización</h3>
            <img src='/img/add.png' alt='Add img' onClick={props.cambiarMostrar}/>
        </section>
    )
}

export default MiOrg;