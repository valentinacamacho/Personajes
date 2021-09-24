import React from "react";
import { NavLink } from "react-router-dom";



const MainMenu = () => (


    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

   <div className="container-fluid">
    <a className="navbar-brand" id="navbar-brand" >Los padrinos magicos</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

   
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
     
      <li className="nav-link active" aria-current="page" >
     <NavLink exact to="/">Home</NavLink>
      </li>
       
      <li className="nav-link active" aria-current="page" >
      <NavLink exact to="/personajes">Personajes </NavLink>
      </li>

      
      <li className="nav-link active" aria-current="page" >
      <NavLink exact to="/contacto">Contacto</NavLink>
      </li>

     
      <li className="nav-link active" aria-current="page" >
       <NavLink exact  to="/datos_api">Datos</NavLink>
      </li>

      <li className="nav-link active" aria-current="page" >
      <NavLink exact  to="/personajes_api">Personajes API</NavLink>
      </li>
    </ul>
</div>


  <form class="form">
    <input class="form-control mr-sm-2" type="Buscar" placeholder="Buscar" aria-label="Buscar"/>
    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Buscar</button>
  </form>
 </div>

    
   

    {/*<ul>
    <li><NavLink exact to="/">Home</NavLink></li>
    <li><NavLink exact to="/personajes">Personajes </NavLink></li>
    <li><NavLink exact to="/contacto">Contacto</NavLink></li>
    <li className="nav-link active" aria-current="page" ><NavLink exact  to="/datos_api">Datos API</NavLink></li>
    <li className="nav-link active" aria-current="page" ><NavLink exact  to="/personajes_api">Personajes API</NavLink></li>
    </ul>*/}


  
    

    </nav>
)



export default MainMenu;