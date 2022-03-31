import {useEffect, useState } from "react"

const MoleculaImg = (idSubmenuTwo, ApiImage) => {  

    const [idImagen, setIdImagen] = useState();

    useEffect(() => {
        if(idSubmenuTwo === ApiImage._id){
            setIdImagen(ApiImage._id)
        }
    }, [idSubmenuTwo, ApiImage._id])

    return (
        <div>
            <img src={`http://localhost:3001/image/photo/${idImagen}`} alt={ApiImage.photo} /> 
        </div>
    )
}