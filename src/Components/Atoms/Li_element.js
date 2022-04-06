import  { useState,  useEffect } from "react"
import ComponentImg from "../Molecules/ComponentImg";

const Li_Element  = ({ _id, name, children, categoryOne, categoryTwo , grandFather, padre, img }) => {

    const [aprovarReturn, SetaprovarReturn ] = useState(null);
    const [listImg, setListImg ] = useState(null);


useEffect(async ()  => {
    await funcionPeticionImagenes(img)

        if(grandFather === 1){
            await retonarPrimerosHijos()
        }else if((categoryOne && padre ) || (categoryTwo && padre)){
            let comparador = padre.parentNode.getAttribute('data')
            if((comparador === categoryTwo) || (categoryOne === comparador)){
                await retonarPrimerosHijos()
            }
        }
},[ grandFather, padre, categoryTwo , categoryOne, img, listImg ])

const funcionPeticionImagenes = (img) => {
    if(img){
    fetch(img)
    .then(res => res.json())
    .then(data => {
        data.map(item => {
            setListImg({
                idImg: item._id,
                submenuName: item.name,
            })
        })
    })
    .catch(err => {
        console.log(err)
    })
    }else{
        console.log('No se paso el parametro IMG')
    }
}

const retonarPrimerosHijos = () =>{
    SetaprovarReturn(true)
}

if(aprovarReturn === true && listImg){
    return(
        <div className="contend_img">
        {
            grandFather === 2 ?
             listImg !== null && Object.keys(listImg).length > 0 ?
            <ComponentImg 
            name={name}
            data={listImg}
            />
             : 
             null
            :
            null
        }
        <li key={_id} className={`item`} data={_id} >
            <a href="#" className="link">{ name }</a>
            {
                children ? 
                children : 
                null
            }
        </li>
        </div>)
}else if(aprovarReturn){
    return(

        <li key={_id} className={`item`} data={_id} >
            <a href="#" className="link">{ name }</a>
            {
                children ? 
                children : 
                null
            }
        </li>)
}
else{

    return null

}}

export default Li_Element