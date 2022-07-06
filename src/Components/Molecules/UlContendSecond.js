import useAxios from "../Atoms/getAxios";
import Li_Element_Second from "../Atoms/Li_Element_Second";

const UlContendSecond = ({urlTwo, 
    identifier, 
    urlThree,
    comparativo}) => {

    const [data, error] = useAxios(urlTwo)

    return(
        <ul className={`submenu submenu-${identifier}`} >
            {
                data ? 
                data.map(({submenuone, name, _id }) => {
                    if(submenuone ? submenuone.name === comparativo: null){
                        return(
                            <Li_Element_Second 
                                key={_id}
                                urlThree={urlThree}
                                _id={_id}
                                name={name}
                                comparativo={comparativo}
                                grandFather={identifier}
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
export default UlContendSecond;