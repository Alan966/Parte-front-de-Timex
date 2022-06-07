import "../../ComponentsCss/Moleculas/PartTwoTimex.css";
import useAxios from "../Atoms/getAxios";
import CardImgHome from "../Atoms/CardImgHome";

let x = 1
const PartTwoTimex = () => {
 
    const [data, error] = useAxios("http://localhost:5000/home/all");

return(
    <section className='two_section_timex'>
        <div>
        { 
             data!= null ? 
             data.slice(1,3).map(({_id, name}) => {
                 return(
                     <CardImgHome 
                     _id={_id} 
                     name={name}
                     />
                 )
             })
             : 
             null
        }
        </div>
        <div></div>
    </section>
)
}

export default PartTwoTimex