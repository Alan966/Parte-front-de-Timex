import { Component } from "react";
import AutocompleteRelojesTwo from "../../Atoms/relojes/AutocompleteRelojoesTwo";

 class BuscadorRelojesTwo extends Component {
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
                    <AutocompleteRelojesTwo
                    url={this.state.relojes}
                    nombre={this.state.nombre}
                    />
                </form>
            </div>
        )
    }
}

export default BuscadorRelojesTwo;