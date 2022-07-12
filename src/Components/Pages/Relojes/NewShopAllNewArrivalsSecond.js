import { Component } from "react"
import "../../../ComponentsCss/Pages/NewShopAllNewArrivals.css"
import { get } from "axios"
import CardRelojPrincipal from "../../Atoms/relojes/cardReloj";
import BuscadorRelojesTwo from "../../Molecules/relojes/BuscadorRelojesTwo";
export  default class NewShopAllNewArrivalsTwo extends Component{
    constructor (props){
        super(props); 
        this.state = { 
            direccion: this.props.direccion, 
            name: this.props.name,
            saber: [], 
        }
        this.relojes = (this.props.relojes)
        
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
                <BuscadorRelojesTwo
                   url={this.relojes}
                     nombre={this.state.name}
                 />
                <div className="contend_relojes">
                    {
                        this.state.data ? 
                        this.state.data.slice(0,this.state.contadorcontador).map(item => {
                            if(item && item.submenu === this.props.name ){
                                if(item && item.principal === "true"){
                                    return(
                                        <CardRelojPrincipal 
                                         key={item._id}
                                         id={item._id}
                                         price={item.price}
                                         description={item.description}
                                         name={item.name}
                                         submenutwo={item.submenutwo}
                                        />
                                    )
                                }else return null
                            }else{
                                return null
                            } 
                        })
                        : 
                        <h1>Cargando...</h1>
                    }
                </div>
            </main>
        )
    }
}