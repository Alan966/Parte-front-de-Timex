import { useEffect, useState } from "react";
import ImgReturn from "../Atoms/Imges";

const ComponentImg = ({ name, data}) => {
    const [idImagen, setIdImagen] = useState(null);

    useEffect(() => {
        if(name === data.submenuName){
            setIdImagen(true)
        }
    }, [name, data])

    if(idImagen === true){
        return(
            <ImgReturn 
            data={data}
            />
        )
    }else{
        return null
    }
    
    
}
export default ComponentImg;