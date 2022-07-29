import "../../../ComponentsCss/Pages/NewShopAllNewArrivals.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../Atoms/getAxios";
import BuscadorRelojesThree from "../../Molecules/relojes/BuscadorRelojesThree";
import CardRelojPrincipal from "../../Atoms/relojes/cardReloj";

const PagesSubmenuTwoandThreeAsignacion = ({
    direccion, 
    name, 
    relojes
}) => {

    const { id, url } = useParams();

    const ComparacionInformacion = (id, url) => {
        if(id && url === undefined){

            if(id === "TIMEX X SPACE INVADERS"){

                return "Timex T80"
            }else if(id ==="TIMEX X THE JAMES BRAND" ){
                return "Timex X The James Brand"
        }
    }else if( url !== undefined){
        if(url === "Learn More"){
            return "Timex T80"
        }else if(url === "Shop Now"){
            return "Expedition"
        }else if(url === "Sign Up"){
            return "Expedition"
        }
    }}

    const [data, error] = useAxios(relojes)
    const [info, setInfo] = useState();


    if(error){
        console.log(error)
    }

    let nombre = ComparacionInformacion(id, url)

    useEffect(() => {
        setInfo(data)
        return () => {
            setInfo([])
        }
    },[data, id, url])

    return(
        <main className="ContenedorDeRelojes">
        <h1 className="url">{ `${direccion}/${id}/${url !== undefined ? url : ""}`}</h1>
        <h2 className="title_relojes smartch">{ `${name}/${id}/${url !== undefined ? url : ""}`}</h2>
            <BuscadorRelojesThree 
            urlOne={relojes}
            nombre={nombre}
            />
            <div className="contend_relojes contend">
                {
                   
                    info &&
                    info.map(e => {
                        if(e.submenutwo === nombre){
                            if(e.principal === "true"){
                                return(
                                    <CardRelojPrincipal 
                                    key={e._id}
                                    identificador={e._id}
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
                }
            </div>
        </main>
)

}
export default PagesSubmenuTwoandThreeAsignacion;