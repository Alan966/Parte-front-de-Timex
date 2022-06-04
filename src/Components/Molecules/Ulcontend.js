import { useState, useEffect, useRef  } from 'react';
import Li_Element from '../Atoms/Li_element';
import Form from './Form';
import "../../ComponentsCss/Moleculas/Ulcontend.css";

const Ulcontend = ({ url, children, _id, img, contraseña })  =>  {


    const [ulcontend, setUlcontend] = useState([]);

    const useref = useRef()

    useEffect(() => {
        fetch(`${url}`)
        .then(res => res.json())
        .then(data => {
            setUlcontend(data) 
        })
        .catch(err => {
            console.log(err)
        })


        if(useref !== null && _id !== 1){
            useref.current.classList.add('submenu') 
            }

    }, [ulcontend, url, useref])


return(
    <ul key={contraseña} className={`menu menu-${_id}`}ref={useref}>
        <div className='contend_header_title'>
            <h2 className='timex_title_hamburguer'>TIMEX</h2>
            <p className='legend_timex_header'>MY TIMEX</p>
        </div>
            <Form/>
        {
            ulcontend ?
            ulcontend.map(item => { 
                if(children || item.submenutwo){
                        if(item.submenuone){
                        return(
                            <Li_Element 
                                 _id={item._id}
                                name={item.name}
                                children={children}
                                grandFather={_id}
                                categoryOne={item.submenuone._id } 
                                padre={useref.current}
                                img={img}
                            /> ) 
                    }else if(item.submenutwo){
                        return(
                            <Li_Element 
                                 _id={item._id}
                                name={item.name}
                                grandFather={_id}
                                categoryTwo={item.submenutwo._id } 
                                padre={useref.current}
                            /> ) 
                    }else{
                        return(
                            <Li_Element 
                                 _id={item._id}
                                name={item.name}
                                grandFather={_id}
                                children={children}
                                padre={useref.current}
                            /> ) 
                    }
                }else{
                    return(
                        <Li_Element 
                             _id={item._id}
                            name={item.name}
                            children={children}
                            grandFather={_id}
                        /> ) 
                }
                    })
            :
            null
        }
    </ul>
)}
export default Ulcontend;



