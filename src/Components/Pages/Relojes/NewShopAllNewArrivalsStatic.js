import "../../../ComponentsCss/Pages/NewShopAllNewArrivals.css"
import CardRelojPrincipal from "../../Atoms/relojes/cardReloj";
import BuscadorRelojesTwo from "../../Molecules/relojes/BuscadorRelojesTwo";
import { useEffect, useState } from "react";
import useAxios from "../../Atoms/getAxios";

export default function NewShopAllNewArrivalsTwo ({
    direccion, 
    name, 
    relojes
}){

          const [info, setInfo] = useState();

           const [ data, error ] = useAxios(relojes)


    useEffect(() =>{
        setInfo(data ? data.filter(n => n.name === name) : [])
        return () => {
            setInfo([])
        }
    },[data, name])
  
        return(
            <main className="ContenedorDeRelojes">
                <h1 className="url">{direccion }</h1>
                <h2 className="title_relojes">{ direccion}</h2>
                <BuscadorRelojesTwo
                   urlOne={relojes}
                   nombre={name}
                 />
                <div className="contend_relojes">
                {
                    info 
                    &&
                    info.slice(0,400).map(reloj => {
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
