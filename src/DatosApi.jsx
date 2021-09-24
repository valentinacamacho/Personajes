//se importa el componente react
import react, { Component } from "react";
//
import { unmountComponentAtNode } from "react-dom";
//ayuda a manejar las peticiones 
import axios from "axios";

//se trae la clase que se llame igual que el componente de Datos Api y se llama el componente
class DatosAPI extends Component{

    //cuerpo de la clase
    //metodo constructor que se pasa como parametro los props
    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }

//traer la informacion
    componentDidMount(){
        //ruta de la api que funciona por get
        axios.get('https://jsonplaceholder.typicode.com/posts')
       //llamamos la promesa
        .then(resp => {
            //la variable resp ejecute y nos da la respuesta de la promeda hacia el llamado de los datos
            this.setState({posts: resp.data})
          })
      }     
 
     

   //  componentDidMount(){
      //   fetch('https://jsonplaceholder.typicode.com/posts', {method: 'get'})
        //.then(response => response.json())      
        //ejecuta la consulta en la Api y la guarde en la variable response
         //es una promesa o funciones asincronas depende de la documentacion
         //.then(dataResponse => {
             //inicializar el estado
         //    this.setState({
             //lo que se llene en dataResponse
           //      posts: dataResponse
             //})
        //});
    //}

    render(){
         // se define una variable  para que se pueda mapiar los datos 
        const {posts} = this.state
        return (
            <>
            <div>
                {
                    //se mapea los datos con la funcion map para que pueda recorrer
                    posts.map( u => (
                        //cuando tenga las disposiciones pida los sigientes datos que son id,titulo y body con la variable u para que pueda acceder a ella
                        <>
                        <p>{u.id}</p>
                        <p>{u.title}</p>
                        <p>{u.body}</p>
                        <hr/>
                        </>
                    ))
                }
            </div>
            </>
        )
    }
}

export default DatosAPI; 