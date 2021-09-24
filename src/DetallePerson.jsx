import React from "react";



const personajes = [
    {
        "id":1,
        "nombre":"Timmy Turner",
        "edad":10,
        "genero":"Masculino",
        "grado":11,
        "imagen":"http://pa1.narvii.com/6543/5b218b1f2a8ea77d81e667288f56a698b2327abe_00.gif"
       
     
     },
     {
         "id":2,
         "nombre":"Poof",
         "edad":2,
         "genero":"Femenino",
         "grado":12,
         "imagen":"https://c.tenor.com/n_CvMKT3yCYAAAAC/fairly-odd.gif"
     },
     {
         "id":3,
         "nombre":"Cosmo",
         "edad":100,
         "genero":"Masculino",
         "grado":13,
         "imagen":"https://reygif.com/media/2/cosmo-y-wanda-19577.gif"
     },
     {
         "id":4,
         "nombre":" Wanda",
         "edad":100,
         "genero":"Femenino",
         "grado":12,
         "imagen":"https://reygif.com/media/2/timmy-cosmo-y-wanda-19582.gif"
     },
     {
         "id":5,
         "nombre":"Trixie",
         "edad":10,
         "genero":"Femenino",
         "grado":18,
         "imagen":"https://c.tenor.com/GN8lr2UZmC8AAAAC/trixie-tang-timmy-turner.gif"
     },
     {
         "id":6,
         "nombre":"Croker",
         "edad":41,
         "genero":"Masculino",
         "grado":12,
         "imagen":"https://c.tenor.com/2Izt4JWZ2jIAAAAd/fairy-godparents-mr-crocker.gif"
     },
     {
         "id":7,
         "nombre":"Vicky",
         "edad":16,
         "genero":"Femenino",
         "grado":"18",
         "imagen":"https://reygif.com/media/2/timmy-cosmo-wanda-y-vicky-19581.gif"
     },
     {
         "id":8,
         "nombre":"Barbilla Roja",
         "edad":30,
         "genero":"Masculino",
         "grado":"18",
         "imagen":"http://3.bp.blogspot.com/-wGWTUPx46zU/Vbwe2M27xzI/AAAAAAAAD48/_e2QFFyrE3c/s1600/Barbilla%2BRoja%2Bde%2Bla%2Bserie%2Banimada.jpg"
     },
     {
         "id":9,
         "nombre":"Binky",
         "edad":9,
         "genero":"Femenino",
         "grado":"18",
         "imagen":"https://c.tenor.com/W2sXs7Rz5qMAAAAC/the-fairly-odd-parents-tootie.gif"
     },
     
]

const DetallePerson = ({match}) => {
    const personaje = personajes.filter(p => p.id === parseInt(match.params.id))[0];

    return(
        <>
            {
                personaje ? (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {personajes.nombre}
                            </h5>
                            <p className="card-text">Edad: {personaje.edad}.</p>
                            <p className="card-text">Genero: {personaje.genero}.</p>
                            <p className="card-text">Grado: {personaje.grado}.</p>

                            <img  className="img" src={personaje.imagen}/>
                        </div>
                    </div>
                ):
                <h1>El Id no esta registrado.</h1>
            }
            <a href={`/personajes`}>Ver todos los personajes</a>
        </>
    );
};

export default DetallePerson;