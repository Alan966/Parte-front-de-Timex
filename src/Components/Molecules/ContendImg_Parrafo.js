import { useEffect, useRef } from "react"
import styled from "styled-components"
import "../../ComponentsCss/Moleculas/ContendImg_Parrafos.css";
import useAxios from "../Atoms/getAxios"

const ContendImg_Parrafo = ({numero, title, parrafo}) => {

    const [data , error] = useAxios("http://localhost:5000/home/all")
    
    let date = null 

    if(data) date = data[numero]
    
return(
    <ContenedorImg>
        <ContenedorImages>
            {
                date && 
                    <img 
                    src={`http://localhost:5000/home/photo/${date._id}`} 
                    alt={date.name}
                    className="img_parrafo"
                    />
            }
            <iframe 
            className="video_parrafo"
            src="https://www.youtube.com/embed/ex8IQpUAhbg" 
            title="YouTube video player" 
            frameBorder="0" 
            allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </ContenedorImages>
        <div className="contend_second_section">
            <h2 className="title_second">{title}</h2>
            <p className="parrafo_second">{parrafo}</p>
            <div className=" center_conter">
                    <div className="ShopNow">
                        <a href="#">SHOP NOW</a>
                    </div>
            </div>
        </div>
    </ContenedorImg>
)}

const ContenedorImg = styled.div`
    width: 100vw;
`
const ContenedorImages = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 3fr;
`

export default ContendImg_Parrafo