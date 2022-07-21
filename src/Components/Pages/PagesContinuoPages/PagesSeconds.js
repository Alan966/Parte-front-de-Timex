import useAxios from "../../Atoms/getAxios";
import "../../../ComponentsCss/Pages/NewShopAllNewArrivals.css"
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import CardRelojPrincipal from "../../Atoms/relojes/cardReloj";


const PagesSeconds = ({
    direccion, 
    relojes, 
    name
}) => {

    const { id } = useParams() 

    const [info , setInfo] = useState();
    const [data, error] = useAxios(relojes)

    const compararInformacion = () => {
        if(name === "SMARTWATCHES"){
            return "Digital Watches"
            // tercer nivel
        }else if(name === "CO_LABS"){
            return "SHOP BY COLLECTION"
            // segundo niver
        }else if(name === "BEST SELLERS"){
            return "BEST SELLERS"
            // segundo nivel
        }
    }

    let nombre = compararInformacion()

    useEffect(() => {
        setInfo(data)
        return () => {
            setInfo([])
        }
    },[name])

return(
        <main className="ContenedorDeRelojes">
            <h1 className="url">{direccion }</h1>
            <h2 className="title_relojes">{ direccion}</h2>
            <div className="contend_relojes">
                {
                    info && name === "SMARTWATCHES"  ? 
                    info.map(e => {
                        if(e.submenutwo === nombre){
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
                            }else{
                                return null
                            }
                        }
                    })
                    : 
                    info && (name === "CO_LABS" || name === "BEST SELLERS")?
                    info.map(e => {
                        if(e.submenu === nombre){
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
                            }else{
                                return null
                            }
                        }
                    }):
                    null
                }
            </div>
        </main>
)
}

export default PagesSeconds;