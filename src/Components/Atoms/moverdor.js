
 const siguiente = ({elelemento}) => {

        const slidershow = elelemento.current;

        if(slidershow.current.children.length > 0){
            const primerElemento = slidershow.current.children[0]; 
            slidershow.current.style.transition = `500ms ease-out all`; 
            const tamañoSlide = slidershow.current.children[0].offsetWidth; 
            slidershow.current.style.transform = `translateX(-${tamañoSlide}px)`; 

            const transicion = () => {
                slidershow.current.style.transition = 'none'; 
                slidershow.current.style.transform = `translateX(0)`; 

                slidershow.current.appendChild(primerElemento); 
                slidershow.current.removeEventListener('transitionend', transicion);
            }
            slidershow.current.addEventListener('transitionend', transicion);
        }
    }

    const anterior = ({ elelemento }) => {
        const slidershow = elelemento.current;
        if(slidershow.current.children.length > 0){
            const index = slidershow.current.children.length - 1; 
            const ultimoElemento = slidershow.current.children[index];
            slidershow.current.insertBefore(ultimoElemento, slidershow.current.firstChild); 

            slidershow.current.style.transition = 'none'; 

            const tamañoSlide =  slidershow.current.children[0].offsetWidth; 
            slidershow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slidershow.current.style.transition = `500ms ease-out all`; 
                slidershow.current.style.transform = `translateX(0)`; 
            }, 30)
        }
    }

export { siguiente, anterior } 

