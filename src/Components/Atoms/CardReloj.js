let x = 0 
const CardReloj = ({_id, name, description}) => {

 const sumar = () => {
     x++ 
     return x
 }

return(
    <div key={_id} className={`relojTimex card_${sumar()} img`}>
        <div>
            <img className="img_timex_one" src={`http://localhost:5000/relojesTimexOne/photo/${_id}`} alt={name} />
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