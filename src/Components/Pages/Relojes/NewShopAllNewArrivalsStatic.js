import "../../../ComponentsCss/Pages/NewShopAllNewArrivals.css"
import CardRelojPrincipal from "../../Atoms/relojes/cardReloj";
import BuscadorRelojesTwo from "../../Molecules/relojes/BuscadorRelojesTwo";
import { useEffect, useState } from "react";
import { get } from "axios"

export default function NewShopAllNewArrivalsTwo ({
    direccion, 
    name, 
    relojes
}){
        
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
                <h1 className="url">{direccion }</h1>
                <h2 className="title_relojes">{ direccion}</h2>
                <BuscadorRelojesTwo
                   url={relojes}
                   nombre={name}
                 />
                <div className="contend_relojes">
                {
                    data 
                    &&
                    
                    data.map(reloj => {
                if( name === reloj.name ){
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
