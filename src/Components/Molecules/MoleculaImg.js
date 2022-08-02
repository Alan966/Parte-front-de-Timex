import {useEffect, useState } from "react"
import { BACKEND } from "../Atoms/backend";

const MoleculaImg = (idSubmenuTwo, ApiImage) => {  

    const [idImagen, setIdImagen] = useState();

    useEffect(() => {
        if(idSubmenuTwo === ApiImage._id){
            setIdImagen(ApiImage._id)
        }
    }, [idSubmenuTwo, ApiImage._id])

    return (
        <div>
            <img src={`${BACKEND}/image/photo/${idImagen}`} alt={ApiImage.photo} /> 
        </div>
    )
}