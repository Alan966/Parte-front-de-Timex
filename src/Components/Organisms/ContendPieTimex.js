import useAxios from "../Atoms/getAxios"
import PieTimex from "../Molecules/PieTimex"
import "../../ComponentsCss/Organims/ContendPieTimex.css"
import { BACKEND } from "../Atoms/backend"

const ContendPieTimex = () => {

    const [data, error] = useAxios(`${BACKEND}}/pie/all`)

    return(
        <div className="pie_card">
        <div>
            <h1 className="pie_timex_title"> TIMEX </h1>
        </div>
        <div className="section_cards">
        {
            data?
            data.map(({name, _id}) => {
                return(
                    <PieTimex
                    name={name}
                    key={_id}
                    accesible={_id}
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

export default ContendPieTimex;