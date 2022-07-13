import "../../../ComponentsCss/Pages/NewShopAllNewArrivals.css"
import CardRelojPrincipal from "../../Atoms/relojes/cardReloj";
import BuscadorRelojesTwo from "../../Molecules/relojes/BuscadorRelojesTwo";
import { useEffect, useState } from "react";
import { get } from "axios"
import { Outlet, useParams, useNavigate } from "react-router-dom";

export default function NewShopAllNewArrivalsTwo ({
    direccion, 
    name, 
    relojes
}){

         let { id } = useParams()
         console.log(id)
         const navigate = useNavigate()

         console.log(navigate)
        
           const [data,setData]  = useState();


    useEffect(() =>{
        get(relojes)
        .then(response => {
            setData(response.data)
            console.log(response.data)
        })
        .catch(err =>{
            console.log(`Ocurrio un error el error es ${err}`)
        })
    },[])

  
        return(
            <main className="ContenedorDeRelojes">
                <h1 className="url">{direccion}</h1>
                <h2 className="title_relojes">{ name}</h2>
                <BuscadorRelojesTwo
                   url={relojes}
                   nombre={name}
                 />
                <div className="contend_relojes">
                    {
                        data ? 
                        data.map(item => {
                            if(item && item.submenu === name ){
                                if(item && item.principal === "true"){
                                    return(
                                        <CardRelojPrincipal 
                                         key={item._id}
                                         id={item._id}
                                         price={item.price}
                                         description={item.description}
                                         name={item.name}
                                         submenutwo={item.submenutwo}
                                        />
                                    )
                                }else return null
                            }else{
                                return null
                            } 
                        })
                        : 
                        <h1>Cargando...</h1>
                    }
                </div>
            </main>
        )
    }
