
import { useRef } from "react";
import UlContendEnd from "../Molecules/UlContendEnd";
import { Link } from "react-router-dom"

const Li_Element_Second = ({
    _id,
    name,
    grandFather,
    urlThree, 
    comparativo, 
}) => {


    const ref= useRef()
    const twoRef = useRef()

    const ponerActive = () => {
        ref.current.classList.toggle('active')
        twoRef.current.classList.toggle('active')
    }

    return(
        <>
        <li className={`item item-${grandFather}`} >
            <Link to={`/${comparativo}/${name}`} className={`link link-${_id}`}>
                {
                    name
                }
            </Link>
            <div className="line_one" onClick={ponerActive} ref={ref}></div>
        </li>
        <div className="contenedor_three_sub" ref={twoRef}>
        {
            urlThree ?
            <UlContendEnd
                key={_id}
                identifier={3}
                comparativo={_id}
                comparce={name}
                comparceOne={comparativo}
                urlThree={urlThree}
                />
                : 
                null
        }
        </div>
        </>
        )
}

export default Li_Element_Second;