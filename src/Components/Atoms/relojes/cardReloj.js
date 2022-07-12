import { Component } from "react";
import { Link } from "react-router-dom";
import "../../../ComponentsCss/Atoms/relojes/cardRelojes.css"

export default class CardRelojPrincipal extends Component {
    constructor(props){
        super(props); 
        this.state = {
            key: this.props.id,
            id: this.props.id,
            price: this.props.price,
            name: this.props.name,
            description: this.props.description,
            submenutwo: this.props.submenutwo
        }
    }
    render(){
        return(
            <div className="contend_relojes">
            <Link 
            className="link-card"
            id={this.state.description} 
            to={`/${this.state.name}/${this.state.submenutwo}/${this.state.description}}`}>
                <div className="contend_new">
                    <div className="background_new"></div>
                    <p>New</p>
                </div>
                <img 
                src={`http://localhost:5000/relojestotalroute/photo/${this.state.id}`} 
                alt={this.state.description} />
                <h2 className="prueva">
                    {this.state.description}
                </h2>
                <p
                data-price="Mex$ "
                className="price">
                    {this.state.price}
                </p>
                </Link>
            </div>

        )
    }

}