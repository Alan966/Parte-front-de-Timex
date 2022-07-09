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
            submenuone: this.props.submenuone,
            submenutwo: this.props.submenutwo
        }
    }
    render(){
        return(
            <Link to={`/${this.state.submenuone}/${this.state.submenutwo}/${this.state.name}}`}>
            <div className="contend_relojes">
                <div className="contend_new">
                    <p>New</p>
                </div>
                <img 
            src={`http://localhost:5000/relojestotalroute/photo/${this.state.id}`} 
                alt={this.state.name} />
                <h2 className="prueva">
                    {this.state.name}
                </h2>
                <p>
                    {this.state.price}
                </p>
            </div>
            </Link>
        )
    }

}