import  {useRef } from "react"
import "../../ComponentsCss/Atoms/Li_element.css";
import UlContendSecond from "../Molecules/UlContendSecond";
import { Link } from "react-router-dom"

const Li_Element  = ({
    _id, 
    name,
    grandFather,
    urlTwo,
    urlThree
}) => {

    const ref= useRef()
    const twoRef = useRef()
    const threeRef = useRef()

const ponerActive = () => {
    ref.current.classList.toggle('active')
    twoRef.current.classList.toggle('active')
    const padre = twoRef.current.parentElement
    padre.classList.toggle('active')
    threeRef.current.classList.toggle('active')
}


    return(
        <>
        <li className={`item item-${grandFather}`} 
        data={_id} 
        ref={twoRef}
        >  
            <Link to={`/${name}`} className={`link 
                link-${grandFather}`}>
                { name }
            </Link>
                <div className="line_one" onClick={ponerActive} ref={ref}></div>
        </li>
        <div className="contenedor_two_sub" ref={threeRef}>
        {
                urlTwo ? 
                <UlContendSecond 
                    urlTwo={urlTwo}
                    identifier={2}
                    comparativo={name}
                    urlThree={urlThree}
                /> 
                : 
                null
        }
        </div>
        </>
        )
}

export default Li_Element