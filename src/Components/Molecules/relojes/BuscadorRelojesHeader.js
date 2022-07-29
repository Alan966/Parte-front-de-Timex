import AutocompleteRelojesHeader from "../../Atoms/relojes/AutpcompleteRelojesHeader";
 const  BuscadorRelojesHeader =({
    urlOne
 }) => {


        return(
            <div>
                <form>
                    <AutocompleteRelojesHeader 
                    url={urlOne}
                    />
                </form>
            </div>
        )
}

export default BuscadorRelojesHeader;