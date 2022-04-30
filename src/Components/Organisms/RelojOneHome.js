import { useEffect, useState, useRef } from "react"
import { get } from "axios"
import CardReloj from "../Atoms/CardReloj";
import Carousel from "react-elastic-carousel"


const RelojOneHome = ({ url }) => {

    const [relojOne, setRelojOne] = useState(null)


    let a = useRef([]);
    let b = useRef([]); 
    let c = useRef([]);

    useEffect(() => {
        get('http://localhost:5000/relojesTimexOne/all')
        .then(resp => {
            setRelojOne(resp.data)
        })
        .then(() => {
            a.current = relojOne.slice(0,4)
            b.current = relojOne.slice(4,8)
            c.current = relojOne.slice(8,12)
        })
        .catch(error => {
            console.log(error)
        })


    },[url, relojOne, a.current , b.current, c.current])



    const breakPoints = [
        {width:1, itemsToShow: 1}, 
        {width: 550, itemsToShow: 2}, 
        {width: 768, itemsToShow: 3}, 
        {width: 1200, itemsToShow: 4},
    ]


    return(
           <div className="contenedor" id="carouselExampleSlidesOnly" data-ride="carousel" >
                < Carousel 
                brackPoints={breakPoints} 
                className="contend_relojes" 
                >
                <div className="contend-1" id="section_1">
                    {
                        a.current.length > 0 ? 
                        a.current.map(({_id, name, description}) => {
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
                </div>
                <div className="contend-2" id="section_2">
                   {
                        b.current.length > 0? 
                        b.current.map(({_id, name, description}) => {
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
                </div>
                <div className="contend-3" id="section_3">
                {
                        c.current.length > 0? 
                        c.current.map(({_id, name, description}) => {
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
                </div>
            </Carousel>
           </div>
       
            
    )
}
export default RelojOneHome