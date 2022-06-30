import axios from "axios"
import { useEffect, useState } from "react"
import "../../ComponentsCss/Atoms/CardPie.css";

const CardPie = ({KeyTwo, name, pie }) => {

    if(KeyTwo === pie._id){
        return(
            <div className="subtitle_card">
            <a href={`/${name}`}>
                    <h2 
                    className="subsubtitle">
                        { name }
                    </h2>
                </a>
            </div>
            )
    }else{
       return null
    }
}

export default CardPie

