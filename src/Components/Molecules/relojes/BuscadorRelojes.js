import { Component } from "react";
import AutocompleteRelojes from "../../Atoms/relojes/AutocompleteRelojes";

 class BuscadorRelojes extends Component {
    constructor(props){
        super(props);
        this.state ={
            relojes : this.props.url,
            nombre: this.props.nombre

        }
    }

    render(){
        return(
            <div>
                <form>
                    <AutocompleteRelojes 
                    url={this.state.relojes}
                    nombre={this.state.nombre}
                    />
                </form>
            </div>
        )
    }
}

export default BuscadorRelojes;