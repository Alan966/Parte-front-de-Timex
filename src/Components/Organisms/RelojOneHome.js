import { useEffect, useState } from "react"
import { get } from "axios"
import CardReloj from "../Atoms/CardReloj";
import Carousel from "react-elastic-carousel"
import "../../ComponentsCss/Organims/RelojOneHome.css";

const RelojOneHome = ({ url }) => {

    const [relojOne, setRelojOne] = useState(null)

    useEffect(() => {
        get(url)
        .then(resp => {
            setRelojOne(resp.data)
        })
        .catch(error => {
            console.log(error)
        })


    },[url, relojOne])

    const conocerWith = () => {
        let width = window.innerWidth
        if(width > 756){
            return 4
        }else{
            return 1
        }
    }

    return(
            < Carousel   
                itemsToShow={conocerWith()}
                >
                {
                    relojOne? 
                    relojOne.map( item => {
                        return(
                            <CardReloj 
                            key={item._id}
                            _id={item._id} 
                            name={item.name}
                            description={item.description} 
                            /> 
                        )
                    })
                        :
                    <h1>Cargando...</h1>
                }
            </Carousel>     
    )
}
export default RelojOneHome