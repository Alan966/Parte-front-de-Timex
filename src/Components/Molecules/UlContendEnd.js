import useAxios from "../Atoms/getAxios";
import Li_Element_End from "../Atoms/Li_Element_End";
const UlContendEnd = ({
    urlThree,
    identifier, 
    comparativo, 
    comparce, 
    comparceOne
}) => {

    const [data, error] = useAxios(urlThree)

    return(
        <ul className={`submenu submenu-${identifier}`} >
        {
            data ?
            data.map(({_id, name, submenutwo}) => {
                    if(submenutwo._id === comparativo){
                        return(
                            <Li_Element_End 
                            name={name}
                            grandFather={identifier}
                            _id={_id}
                            comparceOne={comparceOne}
                            comparce={comparce}
                            />
                        )
                    }
            }) 
            : 
            null
        }
    </ul>
    )
}
export default UlContendEnd;