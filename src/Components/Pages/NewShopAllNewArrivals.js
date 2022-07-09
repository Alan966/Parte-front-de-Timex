import { Component } from "react"
import "../../ComponentsCss/Pages/NewShopAllNewArrivals.css"
import { get } from "axios"
import CardRelojPrincipal from "../Atoms/relojes/cardReloj";
import BuscadorRelojes from "../Molecules/relojes/BuscadorRelojes";
export  default class NewShopAllNewArrivals extends Component{
    constructor (props){
        super(props); 
        this.state = { 
            direccion: this.props.direccion, 
            name: this.props.name
        }
        this.relojes = (this.props.relojes)

        this.estado = {
            data: []
        }
    }

    UNSAFE_componentWillMount(){
        get(this.relojes)
        .then(response => {
            this.setState({
                data: response.data
            })
        })
    }


    render(){
        return(
            <main className="ContenedorDeRelojes">
                <h1 className="url">{this.state.direccion}</h1>
                <h2 className="title_relojes">{ this.state.name}</h2>
                <BuscadorRelojes
                   url={this.relojes}
                 />
                <div>
                    {
                        this.state.data ? 
                        this.state.data.map(item => {
                            if(item && item.name === "NEW" ){
                                if(item && item.principal === "true"){
                                    return(
                                        <CardRelojPrincipal 
                                         key={item._id}
                                         id={item._id}
                                         price={item.price}
                                         name={item.description}
                                         submenuone={item.name}
                                         submenutwo={item.submenutwo}
                                        />
                                    )
                                }else return null
                            }else{
                                return null
                            } 
                        })
                        : 
                        <h1>Cargando......</h1>
                    }
                </div>
            </main>
        )
    }
}