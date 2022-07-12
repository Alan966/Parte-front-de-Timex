import "../../ComponentsCss/Atoms/CardImgHome.css";
import { Link } from "react-router-dom"

const CardImgHome = ({accesible, name}, props) => {


    return(
        <div className="contend_Img" key={props.key}>
            <img 
            className="img_card_home"
            src={`http://localhost:5000/home/photo/${accesible}`} 
            alt="reloj for Woman or Men" />
            <div className="contendButton">
                {
                    name == "b-Part-Two"? 
                    <Link className="ShopNow Large" to="#">SHOP MENS BEST SELLERS</Link> 
                    :
                    <Link className="ShopNow Large" to="#">SHOP WOMENS BEST SELLERS</Link> 
                }
            </div>
        </div>
    )
}

export default CardImgHome