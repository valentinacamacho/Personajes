import react, { Component } from "react";
import { unmountComponentAtNode } from "react-dom";
import axios from "axios";


class PersonajesAPI extends Component{

    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/valentinacamacho/RepositoriosPersonajes')
        .then(resp => {
            this.setState({posts: resp.data})
          })
      }     


    /* componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/posts', {method: 'get'})
           .then(response => response.json())
           .then(dataResponse => {
              this.setState({
               posts: dataResponse
           })
        });
     }*/

    render(){
        const {posts} = this.state
        return (
            <>
            <div>
                {
                    posts.map( u => (
                        <>
                         <div class="card" style={{width: "10rem"}}>
                                    <div class ="card-body" key={u.id}>
                                    <h5 className="card-title">Nombre: {u.nombre}</h5>
                                    <h5 className="card-title">Genero: {u.Genero}</h5>
                                    <h5 className="card-title">Grupo: {u.Grupo}</h5>
                                    <img className="card-img-top" src={u.imagen} />
                                    </div>
                                </div>
                        </>
                    ))
                }
            </div>
            </>
        )
    }
}

export default  PersonajesAPI; 