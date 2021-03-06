import "../../ComponentsCss/Atoms/CardReloj.css";
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
    src={`http://localhost:5000/relojesTimexOne/photo/${_id}`} 
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
            <a href="#">
                <button className="button_add_to_bag">
                    ADD TO BAG
                </button>
            </a>
        </div>
    </div>
)}

export default CardReloj