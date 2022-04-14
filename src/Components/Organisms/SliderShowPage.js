import {Slideshow, Slide, TextoSlide} from "../Molecules/SliderShow"
import styled from "styled-components" 
import img1 from "../../img/Imagenes/1.jpg"
import img2 from "../../img/Imagenes/2.jpg"
import img3 from "../../img/Imagenes/3.jpg"
import img4 from "../../img/Imagenes/4.jpg"
const SliderShowPage = () => {
return(
<main>
    <Titulo>Productos Destacados</Titulo>
    <Slideshow controles={true} autoplay={true} velocidad="500" intervalo="5000">
    <Slide>
                <a href="/hola.com">
                    <img src={img1} alt="imagen 1" />
                </a>
                <TextoSlide colorFondo="navy" colorTexto="#fff">
                    <p>15% descuento en productos de TIMEX</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a href="/hola.com">
                    <img src={img2} alt="imagen 1" />
                </a>
                <TextoSlide>
                    <p>15% descuento en productos de TIMEX</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a href="/hola.com">
                    <img src={img3} alt="imagen 1" />
                </a>
                <TextoSlide>
                    <p>15% descuento en productos de TIMEX</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a href="/hola.com">
                    <img src={img4} alt="imagen 1" />
                </a>
                <TextoSlide>
                    <p>15% descuento en productos de TIMEX</p>
                </TextoSlide>
            </Slide>
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