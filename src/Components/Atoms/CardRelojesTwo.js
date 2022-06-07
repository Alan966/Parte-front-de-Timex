import "../../ComponentsCss/Atoms/CardRelojesTwo.css";
const CardRelojesTwo = ({ _id, description}) => {
return(
    <div key={_id.toString()} 
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
                <a>
                    <div className="ShopNow">
                        <a href="#">SHOP NOW</a>
                    </div>
                </a>
        </div>
    </div>
)
}

export default CardRelojesTwo;