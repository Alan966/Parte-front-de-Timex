import styled from "styled-components"
import "../../ComponentsCss/Moleculas/ContendImg_Parrafos.css";
import useAxios from "../Atoms/getAxios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { BACKEND } from "../Atoms/backend";

const ContendImg_Parrafo = ({ title, parrafo,url}) => {

    const [data , error] = useAxios(url)
    const [imagenTimex, setImagenTimex] = useState(null)
if(error){
    console.log(error)
}

    useEffect(() => {
        if(window.innerWidth > 768 && data){
            setImagenTimex(data[4])
        }else if(window.innerWidth < 768 && data){
            setImagenTimex(data[3])
        }

        return ()  => {
            setImagenTimex([])
        }
    },[window.innerWidth])

    
return(
    <ContenedorImg>
        <ContenedorImages>
            {
                imagenTimex && 
                    <img 
                    src={`${BACKEND}/home/photo/${imagenTimex._id}`}
                    alt={imagenTimex.name}
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
                        <Link to="/NEW/MENS%20NEW%20ARRIVALS/Q%20TIMEX%2038MM%20SYNTHETIC%20RUBBER%20STRAP%20WATCH%20TWO">SHOP NOW</Link>
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
    
    @media screen and (min-width: 756px){
        grid-template-columns: 1fr 1fr;
    }
`

export default ContendImg_Parrafo