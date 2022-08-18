import images from "../Templates/images";
import "../../ComponentsCss/Organims/Buscador.css";
import BuscadorRelojesHeader from "../Molecules/relojes/BuscadorRelojesHeader";
import { Link } from "react-router-dom";
import CartCounter from "../Molecules/redux/CartCounter";


const Buscador = ({url}) => {
    return(
        <section className="section_search">
        <div className='contend_header_title'>
            <Link to="/">
                <h2 className='timex_title_hamburguer'>
                    TIMEX
                </h2>
            </Link>
            <p className='legend_timex_header'>MY TIMEX</p>
        </div>
            <div className="contend_search">
                    <BuscadorRelojesHeader
                    urlOne={url}
                    />
                <div className="contend_images">
                <Link to="/Autenticacion">
                    <img src={images.user} className="img_user" alt="Imagen de un Usuario"/>
                </Link>
                </div>
                <div className="contend_images numeros">
                    <div className="numero">
                        <CartCounter />
                    </div>
                <Link to="/Autenticacion">
                <img src={images.shopping} className="img_shopping" alt="Imagen de un Carrito" />
                </Link>
                </div>
            </div>
        </section>
    )
}
export default Buscador;