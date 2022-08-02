import "../../ComponentsCss/Atoms/CardReloj.css";
import { Link } from "react-router-dom"
import { BACKEND } from "./backend";
let x = 0 
const CardReloj = ({key, name, _id, description}) => {

 const sumar = () => {
     x++ 
     return x
 }

return(
    <div key={key} className={`relojTimex 
    card_${sumar()} 
    img`}>
        <div>
            <img className="img_timex_one" 
    src={`${BACKEND}/relojesTimexOne/photo/${_id}`} 
    alt={name} />
        </div>
        <div className="description">
            <p>
                {
                   description   
                }
            </p>
        </div>
        <div>
            <Link to="/WATCHES">
                <button className="button_add_to_bag">
                    ADD TO BAG
                </button>
            </Link>
        </div>
    </div>
)}

export default CardReloj