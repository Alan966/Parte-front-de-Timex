import { Link } from "react-router-dom"
import "../../ComponentsCss/Atoms/CardPie.css";

const CardPie = ({KeyTwo, name, pie }) => {

    if(KeyTwo === pie._id){
        return(
            <div className="subtitle_card">
            <Link to={`/${name}`} className="a_sub">
                    <p 
                    className="subsubtitle">
                        { name }
                    </p>
                </Link>
            </div>
            )
    }else{
       return null
    }
}

export default CardPie

