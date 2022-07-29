import Li_Element from '../Atoms/Li_element';
import Form from './Form';
import useAxios from '../Atoms/getAxios';
import "../../ComponentsCss/Moleculas/Ulcontend.css";
import { Link } from "react-router-dom";
import BuscadorRelojesHeader from './relojes/BuscadorRelojesHeader';

const UlcontendOne = ({ url, _id, urlTwo, urlThree})  =>  {

    const [data, error] = useAxios(url)

return(
    <ul className={`menu menu-${_id}`} >
        <div className='contend_header_title'>
            <Link to="/">
            <h2 className='timex_title_hamburguer'>
                TIMEX
            </h2>
            </Link>
            <p className='legend_timex_header'>MY TIMEX</p>
        </div>
            <BuscadorRelojesHeader 
            urlOne={`http://localhost:5000/relojestotalroute/all`}
            />
        {
            data ?
            data.map(item => { 
                    return(
                        <Li_Element 
                            key={item._id}
                             _id={item._id}
                            name={item.name}
                            grandFather={_id}
                            urlTwo={urlTwo}
                            urlThree={urlThree}
                        /> ) 
        }) 
        : 
        null 
    }
    </ul>
)}
export default UlcontendOne;



