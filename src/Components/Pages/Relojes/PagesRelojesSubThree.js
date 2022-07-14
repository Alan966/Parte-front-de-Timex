import BuscadorRelojesTwo from "../../Molecules/relojes/BuscadorRelojesTwo";
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "axios";
import CardRelojPrincipal from "../../Atoms/relojes/cardReloj";

const PagesRelojesSubThree = ({
    direccion, 
    name, 
    relojes
}) => {

    const [data , setData] = useState();

    useEffect(() => {
        get(relojes)
        .then(e => {
            setData(e.data)
        })
        .catch(e => {
            console.log(`Ocurrio un error el error es ${e}`)
        })
    })

    const { id, url } = useParams()

    return(
        <main className="ContenedorDeRelojes">
        <h1 className="url">{ `${direccion}/${id}/${url !== undefined ? url : ""}`}</h1>
        <h2 className="title_relojes">{ `${name}/${id}/${url !== undefined ? url : ""}` }</h2>
        <BuscadorRelojesTwo
           url={relojes}
           nombre={url !== undefined ? id : url}
         />
        <div className="contend_relojes">
       {
           url === undefined ? 
            data && 
            data.map(e => {
                if(id === e.submenu){
                    if(e.principal === "true"){
                        return(
                            <CardRelojPrincipal 
                            key={e._id}
                            id={e._id}
                            price={e.price}
                            name={e.name}
                            description={e.description}
                            submenutwo={e.submenu}
                            />
                        )
                    }

                }else{
                    return null
                }
            })
            : 
            data && 
            data.map(e => {
                if(url === e.submenutwo){
                    if(e.principal === "true"){
                        return(
                            <CardRelojPrincipal 
                            key={e._id}
                            id={e._id}
                            price={e.price}
                            name={e.name}
                            description={e.description}
                            submenutwo={e.submenutwo}
                            />
                        )
                    }
                }else{
                    return null
                }
            })
       }
        </div>
    </main>
    )
} 

export default PagesRelojesSubThree;