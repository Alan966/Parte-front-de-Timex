import "../../ComponentsCss/Atoms/CardRelojesTwo.css";
import { Link } from "react-router-dom"

const CardRelojesTwo = ({ _id, description}) => {
return(
    <div key={_id} 
    className="card_relojes_two" >
        <div className="contend_img_reloj">
            <img className="img_card_reloj" 
    src={`http://localhost:5000/home/photo/${_id}`} 
    alt={description} />
            <div className="capa"></div>
        </div>
        <div className="contend_title">
            <h1 className="title_rolex">
            {
               description   
            }</h1>
        </div>
        <div className=" center_conter">
                <div className="ShopNow">
                    <Link to="/NEW/MENS%20NEW%20ARRIVALS/EXPEDITION%20NORTH%20SIERRA%2040MM%20LEATHER%20STRAP%20WATCH%20TWO">SHOP NOW</Link>
                </div>
        </div>
    </div>
)
}

export default CardRelojesTwo;