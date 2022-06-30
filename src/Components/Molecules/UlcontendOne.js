import Li_Element from '../Atoms/Li_element';
import Form from './Form';
import useAxios from '../Atoms/getAxios';
import "../../ComponentsCss/Moleculas/Ulcontend.css";

const UlcontendOne = ({ url, _id, urlTwo, urlThree})  =>  {

    const [data, error] = useAxios(url)

return(
    <ul className={`menu menu-${_id}`} >
        <div className='contend_header_title'>
            <h2 className='timex_title_hamburguer'>TIMEX</h2>
            <p className='legend_timex_header'>MY TIMEX</p>
        </div>
            <Form/>
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



