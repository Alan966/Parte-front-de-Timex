import { useEffect, useState, useRef } from "react"
import { get } from "axios"
import CardReloj from "../Atoms/CardReloj";
import Carousel from "react-elastic-carousel"
import "../../ComponentsCss/Organims/RelojOneHome.css";

const RelojOneHome = ({ url }) => {

    const [relojOne, setRelojOne] = useState(null)

    useEffect(() => {
        get('http://localhost:5000/relojesTimexOne/all')
        .then(resp => {
            setRelojOne(resp.data)
        })
        .catch(error => {
            console.log(error)
        })


    },[url, relojOne])



    const breakPoints = [
        {width:1, itemsToShow: 1}, 
        {width: 550, itemsToShow: 2}, 
        {width: 768, itemsToShow: 3}, 
        {width: 1200, itemsToShow: 4},
    ]


    return(
           <div 
           className="contenedor" 
           id="carouselExampleSlidesOnly" 
           data-ride="carousel" >
                < Carousel 
                brackPoints={breakPoints} 
                className="contend_relojes" 
                >
                {
                    relojOne? 
                    relojOne.map(({_id, name, description}) => {
                        return(
                            <CardReloj 
                            _id={_id} 
                            name={name}
                            description={description} 
                            /> 
                        )
                    })
                        :
                    null 
                }
            </Carousel>
           </div>
       
            
    )
}
export default RelojOneHome