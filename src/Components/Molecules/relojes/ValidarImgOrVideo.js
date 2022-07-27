import { useEffect, useState } from "react";
import "../../../ComponentsCss/Moleculas/relojes/ValidarimgOrVideo.css";

const ValidarImgOrVideo = ({id, price}) => {

    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);

    const comprovar = () => {
        const img = document.createElement("img");
        img.setAttribute("src",`http://localhost:5000/relojestotalroute/photo/${id}`);
        img.setAttribute("alt",id);
        img.addEventListener('error', ()=> {
            setError(id);
        })
        img.addEventListener('load', ()=> {
            setInfo(id);
        })
    }

    useEffect(() => {
        comprovar();
    },[info, error])

    return(
        <div key={id} className="contend_img">
            <div className="contend_new validaror">
                    <div className="background_new"></div>
                    <p>New</p>
            </div>
            {
                info ? 
                <img className="img_reloj_card" src={`http://localhost:5000/relojestotalroute/photo/${id}`} alt={id} />
                : 
                error &&
                <video src={`http://localhost:5000/relojestotalroute/photo/${id}`} controls  loop></video>
            }
            <p className="validar_price">{`MEX$${price}.00`}</p>
        </div>)
}
export default ValidarImgOrVideo;