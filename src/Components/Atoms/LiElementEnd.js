import { Link } from "react-router-dom"

const LiElementEnd = ({name, grandFather, _id, comparce ,comparceOne }) => {
    return(
        <li className={`item item-${grandFather}`} >
            <Link to={`/${comparceOne}/${comparce}/${name}`} className={`link link-${_id}`}>
                {
                    name
                }
            </Link>
        </li>
    )
}
export default LiElementEnd;