import "../../ComponentsCss/Moleculas/ToMomWithLove.css";
import { get } from "axios"
import { useEffect, useState } from "react"
const ToMonWithLove = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        get("http://localhost:5000/home/all")
        .then(e => {
            if(document.documentElement.clientWidth > 768 && e){
                setData(e.data[0]);
            }else if( document.documentElement.clientWidth < 768 && e){
                setData(e.data[data.length - 1]);
            }
        })
        .catch(e => {
            console.log(e)
        })
    },[document.documentElement.clientWidth])

    return(
    <div className="section_to_mom">
       {
              data ? 
                 <img className="img_father" src={`http://localhost:5000/home/photo/${data._id}`} alt={data.name} />
                : 
                <div>Cargando...</div>
       }
       <div className="contend_legend_father">
           <h2 className="title_father">Father's Day is June 19th</h2>
           <p className="parrafo_father">Discover the Dad-approved watches <br />
               he'll wear and love
           </p>
           <div className="ShopNow blue">
               <a href="#">
                   SHOP FOR DAD
               </a>
           </div>
       </div>
    </div>    
    )
}
export default ToMonWithLove