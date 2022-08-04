import { useEffect, useState, useRef } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import useAxios from "../../Atoms/getAxios";
import ValidarImgOrVideo from "../../Molecules/relojes/ValidarImgOrVideo";
import Carousel from "react-elastic-carousel"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components"
import images from "../../Templates/images";
import "../../../ComponentsCss/Pages/Relojes/CardRelojesComprar.css"
import { Link } from "react-router-dom";
import ButtonRedux from "../../Organisms/Redux/ButtonRedux";

const CardRelojesComprar = ({
    relojes
}) => {


    const [info, setInfo] = useState(null);
    const { id, url, url2 } = useParams();

    const navigate = useNavigate();

    const [data, error] = useAxios(relojes); 

    if(error){
        console.log(error);
    }

    const paresInformacion = (informacion) =>{
        let variable = informacion.length > 0 
        if(variable !== false){
            url2 !== undefined ?
            setInfo(informacion.filter(p => p.description.includes(url2)))
            : 
            url ?
            setInfo(informacion.filter(p => p.description.includes(url)))
            : 
            setInfo(informacion.filter(p => p.description.includes(id)))
        }else {
            console.log("No hay informacion");
        }
    }

    useEffect(() => {
        paresInformacion(data ? data : []);

    },[data])

     function myArrow({ type, onClick, isEdge }) {
        const pointer = '' 
        return (
          <Button onClick={onClick} disabled={isEdge}>
            {pointer}
          </Button>
        )
      }

      const ponerClass = (e) => {
        e.classList.toggle("active");
      }

      

    return(
        <div className="acomodar_todo_desorden">
            <div className="contendor_one_all">
            <div className="container">
                <div  className="tooltip">
                    <div className="content">{`Regresar`}</div>
                    <div className="triangle"></div>
                </div>
                <Link to={`NEW`}
                className="ShopNow card"
                >
                    <div onClick={() => navigate(-1)}>
                    {`Regresa <`}
                    </div>
                </Link>
            </div>
        <Carousel
            renderArrow={myArrow} 
            className="carousel_gray">
            {
                info ? 
                info.slice(0,9).map(({_id, price}) => {
                    return(
                        <ValidarImgOrVideo 
                          id={_id}
                          price={price}
                          key={_id}
                        />
                    )
                })
                : 
                <h1>Cargando...</h1>
            }
        </Carousel>
            </div>
        <div className="contenedor_two_all">
        {
             window.innerWidth > 756 && info?
            <h1 className="validar_price_title">{`MEX$${info[0].price}.00`}</h1>
            : 
            null

        }
             <h2 className="title_reloj"> { url2? url2: url ? url : id }</h2>
             <div className="contend_start">
                <img src={images.star} alt="estrella" />
                <img src={images.star} alt="estrella" />
                <img src={images.star} alt="estrella" />
                <img src={images.star} alt="estrella" />
                <img src={images.rating} alt="mediaEstrella" />
                <p className="write_a_review">{`4.3 (19) Write a Review`}</p>
             </div>

            <div>
                <div className="add_to_widhlist">
                    <img className="imgCorazon" 
                    src={images.heart} alt="Corazon" />
                    <p>Add to Wishlist</p>
                </div>
                {
                    info &&
                    <ButtonRedux 
                    info={info[0]}
                    />
                }
            </div>

            <p className="estimated_delivery">
                Estimated delivery between 6 to 9 days
            </p>

            <div className="contend_mano">
                <img className="imgMano" src={images.raisehand} alt=""  />
                <p>
                    <Link to="/" 
                    className="link_mano"
                    >
                        Size Chart
                    </Link>
                </p>
            </div>

            <ul className="contend_list">
                <li onClick={e => ponerClass(e.target)} 
                   className="li_one"
                >Features
                    <ul>
                        <li>
                            <img className="img_features" src={images.worldTime} alt="check" /> 
                            <p>Two Time Zones</p>
                        </li>
                        <li>
                            <img className="img_features" src={images.speedTest} alt="check" /> 
                            <p>Date Window</p>
                        </li>
                        <li>
                            <img className="img_features" src={images.handWatch} alt="check" /> 
                            <p>Stainless Steel Watch Case</p>
                        </li>
                        <li>
                            <img className="img_features" src={images.ciclo} alt="check" /> 
                            <p>Quick- Release Leather Strap</p>
                        </li>
                        <li>
                            <img className="img_features" src={images.waterWaves} alt="check" /> 
                            <p>Water Resistant to 100 Meters</p>
                        </li>
                    </ul>
                </li>
                <li onClick={e => ponerClass(e.target)} 
                   className="li_one"
                >Specs 
                    <ul>
                        <li> <b>Product:</b> TW2V9700VQ</li>
                        <li> <b>Case Width:</b> 39 mm</li>
                        <li> <b>Case Material:</b> Stainless Steel</li>
                        <li> <b>Band Color:</b> Black</li>
                        <li> <b>Buckle/Clasp:</b> Buckle</li>
                        <li> <b>Case Color:</b> Stainless Steel</li>
                        <li> <b>Case Finish:</b> Brushed/Polished</li>
                        <li> <b>Case Shape:</b> Round</li>
                        <li> <b>Case Size:</b> Full Size</li>
                        
                        <li> <b>Crystal/Lens:</b> Mineral Glass</li>
                        <li> <b>Dial Color: </b> Black</li>
                        <li> <b>Dial Markings:</b> Arabic</li>
                        <li> <b>Watch Movement:</b> Quartz Analog</li>
                        <li> <b> Water Resistance:</b> 100 meters</li>
                        <li> <b>Top Ring Color: </b> Stainless Steel</li>
                        <li> <b>Case Height:</b> 11.5mm</li>
                        <li> <b>Strap and Lug Width:</b> 20mm</li>
                        <li> <b>Attachment Hardware Color:</b> Stainless Steel</li>
                    </ul>
                </li>
                <li onClick={e => ponerClass(e.target)} 
                   className="li_one"
                >Description
                    <ul>
                        <li>We have looked to our past, 
                            and were paying homage to 
                            our original watch collection by 
                            using the Waterbury Watch Company 
                            logo on the dial, crown and second 
                            hand, which bears the stylized 
                            W. This watch displays our attention 
                            to craftsmanship and detail, with 
                            finely-finished surfaces and careful 
                            applications of watchmaking ingenuity. 
                            With our Waterbury Traditional GMT, 
                            weve united this traditional craftsmanship 
                            with the practicality of the GMT function 
                            — the watch can track an additional 
                            time zone thanks to a fourth hand on 
                            the dial, an immensely practical feature 
                            for world travelers and global connections. 
                            With a black leather strap and stainless-steel 
                            case, our Waterbury Traditional GMT is 
                            the wristwatch to keep you on time, 
                            no matter where youre touching 
                            down tomorrow. 
                        </li>
                    </ul>
                </li>
                <li onClick={e => ponerClass(e.target)} 
                   className="li_one"
                >Delivery and Return 
                    <ul>
                        <li>
                        Free Standard Shipping on most orders. 
                        Fan Shop + MyTimex orders do not 
                        qualify for free shipping. Buy 
                        two straps get free Standard 
                        Shipping. Get your refund faster 
                        with easy online returns! 
                        Mail your items back with 
                        our return label within 30 days.
                        </li>
                    </ul>
                </li>

                <div>
                <Link to="/" className="link_mano contend_document">
                    <img className="img_features" src={images.document} alt="Imagen patel" />
                    <p>Product User Manual</p>
                </Link>
                </div>

                <div>
                    <img className="img_redesSociales" src={images.facebookCard} alt="facebook" />
                    <img className="img_redesSociales" src={images.TwitterCard} alt="twitter" />
                </div>
            </ul>
        </div>
        </div>
    )
}

const Button = styled.button`
    display: none;
`

export default CardRelojesComprar;