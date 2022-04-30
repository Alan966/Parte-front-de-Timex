import { useEffect, useRef } from "react"
import styled from "styled-components"
const ContendImg_Parrafo = ({title, img, parrafo, treinta, parrafoClass, logo}) => {

    const ref = useRef(null)

    useEffect(() => {
        if(ref.current !== null){
            ref.current.style.backgroundImage = `url(${img})`

        }
    },[ref.current, img])

return(
    <ContenedorImg className={`contend_Img_parrafo ${treinta}`} ref={ref} >
        <ContendParrafo className={`contend_parrafo_one ${parrafoClass}`}>
            {
                logo ? 
                <img src={logo} alt="logo" /> : 
                null
            }
            <h2 className="title_contend_img">{title}</h2>
            <p className="parrafo">{parrafo}</p>
            <button className="button button_shop">SHOP NOW</button>
        </ContendParrafo>
    </ContenedorImg>
)}

const ContenedorImg = styled.div`
    width: 100vw;
    height: 90vh;
    background-size: cover;
    background-position: center;
    display: grid; 
    grid-template-columns: 1fr 2fr;
    `
const ContendParrafo = styled.div`
   display:flex;
    flex-direction: column; 
   justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export default ContendImg_Parrafo