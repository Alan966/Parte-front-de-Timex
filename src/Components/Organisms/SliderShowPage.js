import { useEffect, useState } from "react"
import {Slideshow, Slide, TextoSlide} from "../Molecules/SliderShow"
import styled from "styled-components"


const SliderShowPage = ({ _id }) => {

    const [guardaImg, setGuardarImg] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/slider/slidershow')
        .then(response => response.json())
        .then(data => {
            setGuardarImg(data);
            
        })
    },[guardaImg])

return(
<main className="main_slider" key={_id}>
    <Titulo>Productos Destacados</Titulo>
    <Slideshow controles={true} autoplay={true} velocidad="500" intervalo="5000">
            {
                guardaImg? 
                guardaImg.map(({_id, description, name}) => {
                    return(
                    <Slide>
                        <a href="/hola.com">
                            <img className="img_sliderShow" src={`http://localhost:5000/slider/photo/${_id}`} alt={name} />
                        </a>
                        <TextoSlide colorFondo="rgba(0,0,0, 0.6)" colorTexto="#fff">
                        <p>
                            {
                                description
                            }
                        </p>
                        </TextoSlide>
                    </Slide>
                    )
                }): 
                null
            }
    </Slideshow>
</main>
);
}

const Titulo = styled.p`
font-size : 18px; 
font-weight: 700; 
text-transform : uppercase; 
margin-bottom: 10px;
`

export default SliderShowPage