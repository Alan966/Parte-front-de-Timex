import { useEffect, useState } from "react";
import { get } from "axios"
import CardRelojesTwo from "../Atoms/CardRelojesTwo";
import "../../ComponentsCss/Organims/RelojesTwoHome.css";

const RelojesTwoHome = ({url}) => {


    const [guardarData, setGuardarData] = useState(null);

    useEffect(() => {
        get(url)
    .then(e  => {
        setGuardarData(e.data)
    })
    .catch(e => {
        console.log(e)
    })
    },[url])


    return(
        <div className="contend_two_relojes">
            {
                guardarData?
                guardarData.slice(4,7).map(({ _id, description}) => {
                    return(
                        <CardRelojesTwo 
                        _id={_id} 
                        description={description}
                        />
                    )
                })
                : 
                null
            }
        </div>

    )
}

export default RelojesTwoHome;