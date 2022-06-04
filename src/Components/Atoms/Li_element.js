import  { useState,  useEffect } from "react"
import ComponentImg from "../Molecules/ComponentImg";
import "../../ComponentsCss/Atoms/Li_element.css";

const Li_Element  = ({
    _id, 
    name,
    children, 
    categoryOne, 
    categoryTwo , 
    grandFather, 
    padre, 
    img }) => {

    const [aprovarReturn, SetaprovarReturn ] = useState(null);


useEffect(()  => {
        if(grandFather === 1){
            retonarPrimerosHijos()
        }else if((categoryOne && padre ) 
        || (categoryTwo && padre)){
            let comparador = 
            padre.parentNode.getAttribute('data')
            if((comparador === categoryTwo) 
            || (categoryOne === comparador)){
                retonarPrimerosHijos()
            }
        }
},[ grandFather, 
    padre, 
    categoryTwo , 
    categoryOne, 
    img ])


const retonarPrimerosHijos = () =>{
    SetaprovarReturn(true)
}

if(aprovarReturn === true){
    return(
        <li key={_id} className={`item 
        item-${grandFather}`} 
        data={_id} >  
        {
            grandFather === 2 ?
            <ComponentImg 
            name={name}
            img={img}
            />
             : 
             null
        }
            <a href="#" className={`link 
            link-${grandFather}`}>
            { name }</a>
            {
                children ? 
                children : 
                null
            }
        </li>
        )
}
else{

    return null

}}

export default Li_Element