import  { useState,  useEffect } from "react"

const Li_Element  = ({ _id, name, children, categoryOne, categoryTwo , grandFather, padre }) => {

    const [aprovarReturn, SetaprovarReturn ] = useState(null);


useEffect( async  ()  => {
        if(grandFather === 1){
            await retonarPrimerosHijos()
        }else if((categoryOne && padre ) || (categoryTwo && padre)){
            let comparador = padre.parentNode.getAttribute('data')
            if((comparador === categoryTwo) || (categoryOne === comparador)){
                await retonarPrimerosHijos()
            }
        }
},[ grandFather, padre, categoryTwo , categoryOne ])

const retonarPrimerosHijos = () =>{
    SetaprovarReturn(true)
}

if(aprovarReturn === true){
    return(
        <li key={_id} className="item" data={_id} >
            <a href="#" className="link">{ name }</a>
            {
                children ? 
                children : 
                null
            }
        </li>)
}else{

    return null

}}

export default Li_Element