import "../../ComponentsCss/Moleculas/ToMomWithLove.css";
import { get } from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BACKEND } from "../Atoms/backend";

const ToMonWithLove = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        get(`${BACKEND}/home/all`)
        .then(e => {
            if(document.documentElement.clientWidth > 768 && e){
                setData(e.data[0]);
            }else if( document.documentElement.clientWidth < 768 && e){
                setData(e.data[8]);
            }
        })
        .catch(e => {
            console.log(e)
        })

        return () => {
            setData([]);
        }

    },[document.documentElement.clientWidth])

    return(
    <div className="section_to_mom">
       {
              data ? 
                 <img className="img_father" src={`${BACKEND}/home/photo/${data._id}`} alt={data.name} />
                : 
                <div>Cargando...</div>
       }
       <div className="contend_legend_father">
           <h2 className="title_father">Father's Day is June 19th</h2>
           <p className="parrafo_father">Discover the Dad-approved watches <br />
               he'll wear and love
           </p>
           <div className="ShopNow blue">
               <Link to="/">
                   SHOP FOR DAD
               </Link>
           </div>
       </div>
    </div>    
    )
}
export default ToMonWithLove