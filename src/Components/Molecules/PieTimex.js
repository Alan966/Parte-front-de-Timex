import axios from "axios"
import { useEffect, useState } from "react"
import CardPie from "../Atoms/cardPie"

const PieTimex = () => {

    const [pie , setPie] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5000/pie/all')
        .then(e => {
            setPie(e.data)
        })
        .catch(e => {
            console.log(e)
        })
    },[pie])
    

    return(
        <div className="pie_card">
            <div>
                <h1 className="pie_timex_title"> TIMEX </h1>
            </div>
            <div className="section_cards">
                {
                    pie ? 
                    pie.map(e => {
                        return(
                            <CardPie 
                            url={'http://localhost:5000/pieSecond/all'}
                            _id={e._id}
                            name={e.name}
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