import axios from "axios"
import { useEffect, useState } from "react"

const CardPie = ({ url, _id, name }) => {

    const [pie , setPie] = useState(null)
    
    useEffect(() => {
        axios.get(url)
        .then( e => {
            setPie(e.data)
            console.log(pie)
        })
        .catch(e =>{
            console.log(e)
        })
    },[pie])

    return(
        <div key={_id} className="card_pie">
            <h1 className="title_card_pie">{ name }</h1>
            <div>{ 
            pie? 
            pie.map(e => {
                if(e.pie._id === _id){
                    return(
                        <div className="subtitle_card">
                            <a href={`/${e.name}`}>
                                <h2 className="subsubtitle">{ e.name }</h2>
                            </a>
                        </div>
                    )
                }else{
                    return null
                }
            }) : 
            null
            }</div>
        </div>
    )
}

export default CardPie