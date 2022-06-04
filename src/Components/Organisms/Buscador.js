import images from "../Templates/images";
import "../../ComponentsCss/Organims/Buscador.css";
const Buscador = () => {
    return(
        <section className="section_search">
            <div className="contend_timex">
                <h2 className="timex_h2">TIMEX</h2>
            </div>
            <div className="contend_search">
                <div>
                    <form className="formulario buscador">
                        <div className="container">
                            <input type="text"  
                            className="text_search"/>
                            <label className="search">
                                SEARCH
                            </label>
                        </div>
                    </form>
                </div>
                <div className="contend_images">
                    <img src={images.user} className="img_user" />
                </div>
                <div className="contend_images">
                    <img src={images.shopping} 
                    className="img_shopping" />
                </div>
            </div>
        </section>
    )
}
export default Buscador;