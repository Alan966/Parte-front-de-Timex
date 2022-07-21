import AutocompleteRelojesTwo from "../../Atoms/relojes/AutocompleteRelojoesTwo";
import { useParams } from "react-router-dom";
 const  BuscadorRelojesTwo =({
    urlOne,
    nombre
 }) => {

    const { id , url } = useParams()

    let variable = nombre ? nombre : url !== undefined ? url : id


        return(
            <div>
                <form>
                    <AutocompleteRelojesTwo
                    url={urlOne}
                    id={variable}
                    />
                </form>
            </div>
        )
}

export default BuscadorRelojesTwo;