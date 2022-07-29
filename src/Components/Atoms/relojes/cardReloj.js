import { Link } from "react-router-dom";
import "../../../ComponentsCss/Atoms/relojes/cardRelojes.css"
import { useParams } from "react-router-dom";

const  CardRelojPrincipal= ({
    price,
    identificador, 
    name, 
    description, 
    submenutwo
}) =>  {

    const { id, url } = useParams();
    console.log(name, id , submenutwo, url)

    const urlContend = name === `NEW`? 
    `/${name}/${submenutwo}/${description}`:
        name !==`BEST SELLERS`?
    `/${name}/${submenutwo}/${submenutwo}/${description}` : 
    `/${name}/${description}`


        return(
            <div className="contend_relojes">
            <Link 
            className="link-card"
            id={description} 
            to={urlContend}>
                <div className="contend_new">
                    <div className="background_new"></div>
                    <p>New</p>
                </div>
                <img 
                src={`http://localhost:5000/relojestotalroute/photo/${identificador}`} 
                alt={description} />
                <h2 className="prueva timex">
                    {description}
                </h2>
                <p
                data-price="Mex$ "
                className="price">
                    {price}
                </p>
                </Link>
            </div>

        )
}

export default CardRelojPrincipal;