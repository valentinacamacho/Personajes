import React , {Component} from "react";

class Formulario extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            nombre: "nombre usuario",
            apellido: ""
        }

        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarApellido = this.cambiarApellido.bind(this);

        let elemento = document.getElementById("elemento")
        console.log(elemento)
    }

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        });
    }

    cambiarApellido(e){
        this.setState({
            apellido: e.target.value
        });
    }

    render(){
        return(
            <div id="elemento">
                <h1>Formulario</h1>
                <form action="">
                    <label htmlFor="">Nombre</label><br/>
                    <input type="text" name="nombre" onChange={ this.cambiarNombre } /><br/>
                    <label htmlFor="">Apellido</label><br/>
                    <input type="text" name="apellido" onChange={ this.cambiarApellido }  /><br/>
                    <input type="submit" value="enviar"/><br/>
                </form>
                <br/>
                <br/>
                <h3>{`Nombre: ${this.state.nombre}`}</h3>
                <h3>{`Apellido: ${this.state.apellido}`}</h3>
            </div>
        )
    }

    componentDidMount(){
        let elemento = document.getElementById("elemento")
        console.log(elemento)
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState);
        console.log(prevProps);
        console.log("-----------------")
    }
}

export default Formulario;