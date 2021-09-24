/*se crea un componente personaje*/
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Person.css';

const Personaje = ({nombre, edad,genero, imagen, id}) => (
    <div className="card">
        <div  className="card-body">
            {/* ternario para validar un promp */}
            <h5 className="card-title"> {nombre} </h5>
            <p className="card-text">Edad: {edad} </p>
            <p className="card-text">Genero: {genero}.</p>
            <p><img  className="imagenes"  src={imagen}/></p>
            <p><Link to={`/personajes/${id}`}>Detalle</Link></p>
            {/*<p className="card-text">Imagen: {Imagen} </p>*/}
        </div>
    </div>
);

Personaje.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    imagen: PropTypes.string
}

Personaje.defaultProps = {
    nombre: "No ocupa un nombre"
}

export default Personaje;