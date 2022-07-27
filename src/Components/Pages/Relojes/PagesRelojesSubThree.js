import BuscadorRelojesTwo from "../../Molecules/relojes/BuscadorRelojesTwo";
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardRelojPrincipal from "../../Atoms/relojes/cardReloj";
import useAxios from "../../Atoms/getAxios";
import "../../../ComponentsCss/Pages/NewShopAllNewArrivals.css"

const PagesRelojesSubThree = ({
    direccion, 
    name, 
    relojes
}) => {

    const [info , setInfo] = useState();
    const [data, error ] = useAxios(relojes)

    useEffect(() => {
        setInfo(data)
        return () => {
            setInfo([])
        }
    }, [data])

    const { id, url } = useParams() 


    return(
        <main className="ContenedorDeRelojes">
        <h1 className="url">{ `${direccion}/${id}/${url !== undefined ? url : ""}`}</h1>
        <h2 className="title_relojes">{ `${name}/${id}/${url !== undefined ? url : ""}` }</h2>
        <BuscadorRelojesTwo
           urlOne={relojes}
         />
        <div className="contend_relojes contend">
       {
           url === undefined ||url === undefined && id === "WOMENS" ?
            info && 
            info.map(e => {
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

                }else if( id === "WOMENS"){
                    if(e.submenu === "WOMENS NEW ARRIVALS"){
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
                    }
                }
                else{
                    return null
                }
            })
            : 
            info  && 
            info.map(e => {
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
                }else if(url === "Bracelet Watches"){
                    if(e.submenutwo === "Automatic Watches"){
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
                    }
                }
                else if(url === "Crystal Watches"){
                    if(e.submenutwo === "Timex X Peanuts"){
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
                    }
                }
            })
       }
        </div>
    </main>
    )
} 

export default PagesRelojesSubThree;