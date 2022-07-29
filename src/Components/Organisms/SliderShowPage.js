import { useEffect, useState } from "react"
import {Slideshow, Slide, TextoSlide} from "../Molecules/SliderShow"
import styled from "styled-components"
import { Link } from "react-router-dom"
import "../../ComponentsCss/Organims/SliderShowPage.css";

const SliderShowPage = ()=> {

    const [guardaImg, setGuardarImg] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/slider/slidershow')
        .then(response => response.json())
        .then(data => {
            if(document.documentElement.clientWidth > 768){
            setGuardarImg(data.slice(0,3));
            }else{
                setGuardarImg(data.slice(4,7));
            }
        })

 
    },[guardaImg, document.documentElement.clientWidth])

return(
<main className="main_slider">
    <Slideshow 
    controles={true} 
    autoplay={true} 
    velocidad="500" 
    intervalo="5000">
        {
            guardaImg ? 
            guardaImg.map(({_id, description, name}) => {
                    return(
                    <Slide key={_id}>
                        <Link to="/NEW/WOMENS%20NEW%20ARRIVALS/Q%20TIMEX%20MALIBU%2036MM%20STAINLESS%20STEEL%20EXPANSION%20BAND%20WATCH">
                    <img 
                        className="img_sliderShow" 
                        src={`http://localhost:5000/slider/photo/${_id}`} 
                        alt={name} />
                        </Link>
                        <TextoSlide colorFondo="rgba(0,0,0, 0.6)"
                         colorTexto="#fff">
                        <p >
                            {
                                description
                            }
                        </p>
                        </TextoSlide>
                    </Slide>
                    )
                })
                : 
            <h1>Cargandoo...</h1>
        }
    </Slideshow>
    <div className="ShopNow">
        <Link to="#">Shop Now</Link>
    </div>
</main>
);
}


export default SliderShowPage