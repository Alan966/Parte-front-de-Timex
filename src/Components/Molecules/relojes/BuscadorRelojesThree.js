import AutocompleteRelojesThree from "../../Atoms/relojes/AutocompleteRelojesThree";

const BuscadorRelojesThree = ({
    urlOne, nombre
}) => {

    return(
        <div>
            <form>
                <AutocompleteRelojesThree 
                url={urlOne} 
                name={nombre}
                />
            </form>
        </div>
    )
}

export default BuscadorRelojesThree;