import "../../../ComponentsCss/Pages/NewShopAllNewArrivals.css"
import CardRelojPrincipal from "../../Atoms/relojes/cardReloj";
import BuscadorRelojesTwo from "../../Molecules/relojes/BuscadorRelojesTwo";
import { useEffect, useState } from "react";
import { get } from "axios"
import {  useParams } from "react-router-dom";

export default function NewShopAllNewArrivalsTwo ({
    direccion, 
    name, 
    relojes
}){

         let { id } = useParams()
        
           const [data,setData]  = useState();


    useEffect(() =>{
        get(relojes)
        .then(response => {
            setData(response.data)
        })
        .catch(err =>{
            console.log(`Ocurrio un error el error es ${err}`)
        })
    },[])
  
        return(
            <main className="ContenedorDeRelojes">
                <h1 className="url">{direccion + '/' + id}</h1>
                <h2 className="title_relojes">{ name}</h2>
                <BuscadorRelojesTwo
                   urlOne={relojes}
                 />
                <div className="contend_relojes">
                {
                    data 
                    &&
                    
                    data.map(reloj => {
                if( id === reloj.submenu ){
                    if(reloj.principal === "true"){
                        return(
                            <CardRelojPrincipal
                            key={reloj._id}
                            id={reloj._id}
                            price={reloj.price}
                            name={reloj.name}
                            description={reloj.description}
                            submenutwo={reloj.submenutwo}
                            />
                        )
                    }
                }else if (id === "COMING SOON" && reloj.submenu === "MENS NEW ARRIVALS"  || id === "SHOP NEW ARRIVALS" && reloj.submenu === "MENS NEW ARRIVALS" ){
                    if(reloj.principal === "true"){
                        return(
                            <CardRelojPrincipal
                            key={reloj._id}
                            id={reloj._id}
                            price={reloj.price}
                            name={reloj.name}
                            description={reloj.description}
                            submenutwo={reloj.submenutwo}
                            />
                        )
                    }
                }
                else return null
                    })
                }
                </div>
            </main>
        )
    }
