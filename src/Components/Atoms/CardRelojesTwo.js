const CardRelojesTwo = ({ _id, name }) => {
return(
    <div key={_id.toString()} className="card_relojes_two" >
        <div className="contend_img_reloj">
            <img className="img_card_reloj" src={`http://localhost:5000/relojesTimexTwo/photo/${_id}`} alt={name} />
            <div className="capa"></div>
        </div>
        <div className="contend_title">
            <h1 className="title_rolex">
            {
               name    
            }</h1>
        </div>
        <div>
        <a href="#">
                <button className="button button_shop">
                    SHOP NOW
                </button>
            </a>
        </div>
    </div>
)
}

export default CardRelojesTwo;