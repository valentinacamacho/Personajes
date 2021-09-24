import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import Header from './Header';
import DetallePerson from './DetallePerson';
import MainMenu from './MainMenu';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Header } />
      <Route path="/personajes" exact component={ Contenedor } />
      <Route path="/personajes/:id" exact component={ DetallePerson } />
      <Route path="/contacto" exact  component={ Contacto } />
      <Route component={() => (
        <h1>Pagina no encontrada</h1>
      )} /> 
    </Switch>
  </Router>
   )


}

export default App;