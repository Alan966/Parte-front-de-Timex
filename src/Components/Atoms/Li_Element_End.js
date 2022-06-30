const Li_Element_End = ({name, grandFather, _id, comparce ,comparceOne }) => {
    return(
        <li className={`item item-${grandFather}`} >
            <a href={`/${comparceOne}/${comparce}/${name}`} className={`link link-${_id}`}>
                {
                    name
                }
            </a>
        </li>
    )
}
export default Li_Element_End;