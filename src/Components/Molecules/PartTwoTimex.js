import img1 from '../../img/Imagenes/timexCoffe.webp';
import img2 from '../../img/Imagenes/timexHierro.webp'
import "../../ComponentsCss/Moleculas/PartTwoTimex.css";
const PartTwoTimex = () => {
return(
    <section className='two_section_timex'>
        <div>
            <div>
                <img className='img_Part_Timex' 
                src={img1} />
            </div>
            <div className=" center_conter space">
                <a>
                    <div className="button 
                    button_shop width_20em">
                        SHOP MENS BEST SELLERS
                    </div>
                </a>
            </div>
        </div>
        <div>
            <div>
                <img className='img_Part_Timex' 
                src={img2} />
            </div>
            <div className=" center_conter space">
                <a>
                    <div 
                    className="button button_shop 
                    width_20em">
                        SHOP WOMENS BEST SELLERS
                    </div>
                </a>
            </div>
        </div>
    </section>
)
}

export default PartTwoTimex