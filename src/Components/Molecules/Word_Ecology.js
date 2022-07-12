import "../../ComponentsCss/Moleculas/Word_Ecology.css";
import { Link } from "react-router-dom"

const WordEcology = () => {
    return(
        <div className="Word_Ecology">
            <div className="wordEcology_one center_conter">

            </div>
            <div className=" center_conter">
                <p>SOURCED RESPONSIBLY, MADE CONSCIOUSLY. 
                    SHOP OUR MOST EARTH FRIENDLY WATCHES</p>
            </div>
            <div className=" center_conter">
                    <div className="ShopNow">
                        <Link to="/">SHOP NOW</Link>
                    </div>
            </div>
        </div>
    )
}

export default WordEcology