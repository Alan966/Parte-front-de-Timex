import { useEffect, useState } from "react";
import { get } from "axios"
import CardRelojesTwo from "../Atoms/CardRelojesTwo";

const RelojesTwoHome = ({url, _id}) => {


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
        <div className="contend_two_relojes" key={_id}>
            {
                guardarData?
                guardarData.map(({name , _id }) => {
                    return(
                        <CardRelojesTwo 
                        _id={_id} 
                        name={name}
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