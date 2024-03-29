import useAxios from "../Atoms/getAxios";
import CardPie from "../Atoms/cardPie"
import "../../ComponentsCss/Moleculas/PieTimex.css";
import { BACKEND } from "../Atoms/backend";

const PieTimex = (props) => {
    const [data, error] = useAxios(`${BACKEND}/pieSecond/all`)

    return(
    <div className="card_pie">
        <h1 className="title_card_pie">
            {props.name}
        </h1>
        <div>
            {
                data? 
                data.map(({_id, name, pie}) => {
                    return(
                <CardPie 
                   KeyTwo={props.accesible}
                   key={_id}
                   name={name}
                    pie={pie}
                   />
                    )
                })
                : 
                null
                                
            }
        </div>
    </div>
)
}

export default PieTimex