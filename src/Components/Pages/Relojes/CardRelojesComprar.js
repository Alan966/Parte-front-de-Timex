import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import useAxios from "../../Atoms/getAxios";
import ValidarImgOrVideo from "../../Molecules/relojes/ValidarImgOrVideo";

const CardRelojesComprar = ({
    relojes
}) => {


    const [info, setInfo] = useState(null);
    const { id, url } = useParams();
    const [data, error] = useAxios(relojes); 

    if(error){
        console.log(error);
    }

    const paresInformacion = (informacion) =>{
        let variable = informacion.length > 0 
        if(variable !== false){
            setInfo(informacion.filter(p => p.description.includes(url)))
        }else {
            console.log("No hay informacion");
        }
    }




    useEffect(() => {
        paresInformacion(data ? data : []);
    },[data])






    return(
        <div>
            {
                info ? 
                info.slice(0,9).map(({_id, description}) => {
                    return(
                        <ValidarImgOrVideo 
                          id={_id}
                          description={description}
                          key={_id}
                        />
                    )
                })
                : 
                null
            }
        </div>
    )
}

export default CardRelojesComprar;