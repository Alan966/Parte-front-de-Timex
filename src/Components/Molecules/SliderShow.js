import { useEffect, useRef, useCallback } from "react"


import {ReactComponent as FlechaIzquierda} from '../../img/icons/iconmonstr-angel-left-thin.svg';
import {ReactComponent as FlechaDerecha} from '../../img/icons/iconmonstr-angel-right-thin.svg';
import styled from "styled-components"

const Slideshow = ({
    children, 
    controles = false,
     autoplay = false, 
     velocidad="500" , 
     intervalo="5000"
}) => { 

    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);

    const siguiente = useCallback(() => {
        if(slideshow.current && slideshow.current.children.length > 0){ 
            const primerElemento = slideshow.current.children[0];
            slideshow.current.style.transition = `${velocidad}ms ease-out all`; 
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`; 

            const transicion = () => {
            slideshow.current.style.transition = 'none'  
            slideshow.current.style.transform = `translateX(0)`; 

            slideshow.current.appendChild(primerElemento) 
            slideshow.current.removeEventListener('transitionend', transicion)
            }

            slideshow.current.addEventListener('transitionend', transicion)
        }
    }, [velocidad]) 

    const anterior = () =>{
        if(slideshow.current.children.length > 0){ 
            const index = slideshow.current.children.length - 1
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild)
           
            slideshow.current.style.transition = 'none'; 

            const tamañoSlide = slideshow.current.children[0].offsetWidth; 
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)` 

            setTimeout(() => {
                slideshow.current.style.transition = `${velocidad}ms ease-out all`; 
                slideshow.current.style.transform = `translateX(0)`; 
            },30)
        }
    } 

    useEffect(() => {
        if(autoplay){
            intervaloSlideshow.current = setInterval(() => {
                siguiente()
            },intervalo)
    
            slideshow.current.addEventListener('mouseneter', () => {
                clearInterval(intervaloSlideshow.current);
            }) 
            slideshow.current.addEventListener('mouseleave', () => { 
                intervaloSlideshow.current = setInterval(() => {
                    siguiente()
                },intervalo)
            },) 
        }
    },[autoplay, intervalo, siguiente])

    return(
        <ContenedorPrincipal>
            <ConteneodrSlideshow ref={slideshow}>
        {
            children
        }
            </ConteneodrSlideshow>
            
           {controles &&
            <Controles>
            <Boton derecho onClick={siguiente}>
                <FlechaDerecha /> 
            </Boton> 
             <Boton onClick={anterior}>
                <FlechaIzquierda /> 
            </Boton>
            </Controles>
           }
        </ContenedorPrincipal>
    )
}



const ContenedorPrincipal = styled.div`
   position: relative;
   height: 50vh; 
`

const Slide = styled.div`
vertical-align: top; 
   min-width: 100vw;
   height: 50vh; 
   overflow: hidden; 
   transition: .3s ease all; 
   z-index: 9; 
   max-height:100%; 
   position: relative;

   img{
       width: 100%;
        height: 100%; 
       vertical-align: top; 
   }
`

const TextoSlide = styled.div`
   background: ${props => props.colorFondo ? props.colorFondo : "rgba(0,0,0,0.5)"};
   color: ${props => props.colorTexto ? props.colorTexto : "#fff"}; 
   width: 100%; 
   padding: 10px 60px; 
   text-align: center;
   position: absolute;
   bottom:0;

   @media screen and (max-width: 700px){
       position: absolute; 
       display:flex; 
       width:100vw;
       justify-content: center;
       align-items: center;
       background: "rgba(0,0,0,0.5)";
   }
`

const ConteneodrSlideshow = styled.div`
display: flex; 
flex-wrap: nowrap;
width:100vw; 
height: 60vh;
`

const Controles = styled.div`
   position: absolute; 
   top: 0; 
   z-index: 20;
   width: 100%;
   height: 100%;
   pointer-events: none;
`

const Boton = styled.button`
pointer-events:all;
background: none; 
border:none; 
outilne : none; 
widht: 50px; 
height: 100%; 
text-align: center;
position: absolute;
transition: .3s ease all;
&:hover {
    background: rgba(0, 0, 0, .2);
    path{
        fill: ##fff;
    }
}

path{
    filter:${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)': 'drop-shadow(2px 0px 0px #fff)'};
}

${props => props.derecho ? 'right: 0': "left: 0"}
`;

export {Slideshow, Slide, TextoSlide}