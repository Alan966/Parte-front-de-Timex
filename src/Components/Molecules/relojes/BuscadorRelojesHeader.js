import AutocompleteRelojesHeader from "../../Atoms/relojes/AutpcompleteRelojesHeader";
 const  BuscadorRelojesHeader =({
    urlOne
 }) => {


        return(
            <div className="contend_contend_autocomplete">
                    <AutocompleteRelojesHeader 
                    url={urlOne}
                    />
            </div>
        )
}

export default BuscadorRelojesHeader;