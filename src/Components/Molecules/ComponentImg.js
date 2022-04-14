import { useEffect, useState } from "react";
import ImgReturn from "../Atoms/Imges";

const ComponentImg = ({ img, name}) => {
    const [listImg, setListImg] = useState(null);

    useEffect(() => {
        funcionPeticionImagenes(img)
    }, [img])

    const funcionPeticionImagenes = (img) => {
        if(img){
        fetch(img)
        .then(res => res.json())
        .then(data => {
            data.map(item => {
                if(item.name === name){
                    setListImg(item._id)
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
        }else{
            console.log('No se paso el parametro IMG')
        }
    }

    return(
        <ImgReturn 
        id={listImg}
        />
    )
    
    
}
export default ComponentImg;