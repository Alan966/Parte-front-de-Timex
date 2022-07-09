import { Component } from "react";
import AutocompleteRelojes from "../../Atoms/relojes/AutocompleteRelojes";

 class BuscadorRelojes extends Component {
    constructor(props){
        super(props);
        this.state ={
            relojes : this.props.url

        }
    }

    render(){
        return(
            <div>
                <form>
                    <AutocompleteRelojes 
                    url={this.state.relojes}
                    />
                </form>
            </div>
        )
    }
}

export default BuscadorRelojes;