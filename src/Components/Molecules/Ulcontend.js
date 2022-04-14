import { useState, useEffect, useRef  } from 'react';
import Li_Element from '../Atoms/Li_element';

const Ulcontend = ({ url, children, id, img })  =>  {


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


        if(useref !== null && id !== 1){
            useref.current.classList.add('submenu') 
            }

    }, [ulcontend, url, useref])


return(
    <ul key={id} className={`menu menu-${id}`}ref={useref}>
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
                                grandFather={id}
                                categoryOne={item.submenuone._id } 
                                padre={useref.current}
                                img={img}
                            /> ) 
                    }else if(item.submenutwo){
                        return(
                            <Li_Element 
                                 _id={item._id}
                                name={item.name}
                                grandFather={id}
                                categoryTwo={item.submenutwo._id } 
                                padre={useref.current}
                            /> ) 
                    }else{
                        return(
                            <Li_Element 
                                 _id={item._id}
                                name={item.name}
                                grandFather={id}
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
                            grandFather={id}
                        /> ) 
                }
                    })
            :
            null
        }
    </ul>
)}
export default Ulcontend;



