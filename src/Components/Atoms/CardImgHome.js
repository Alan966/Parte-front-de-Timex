import "../../ComponentsCss/Atoms/CardImgHome.css";

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
                    <a className="ShopNow Large" href="#">SHOP MENS BEST SELLERS</a> 
                    :
                    <a className="ShopNow Large" href="#">SHOP WOMENS BEST SELLERS</a> 
                }
            </div>
        </div>
    )
}

export default CardImgHome