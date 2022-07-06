import useAxios from "../Atoms/getAxios";
import LiElementEnd from "../Atoms/LiElementEnd";
const UlContendEnd = ({
    urlThree,
    identifier, 
    comparativo, 
    comparce, 
    comparceOne
}) => {

    const [data, error] = useAxios(urlThree)
      if(error){
        console.log(error)
      }

    return(
        <ul className={`submenu submenu-${identifier}`} >
        {
            data ?
            data.map(({_id, name, submenutwo}) => {
                    if(submenutwo ? submenutwo.name === comparce: null){ 
                        return(
                            <LiElementEnd 
                            name={name}
                            grandFather={identifier}
                            _id={_id}
                            key={_id}
                            comparceOne={comparceOne}
                            comparce={comparce}
                            />
                        )
                    }else{
                        return null && console.log("no se encontro nada")
                    }
            }) 
            : 
            null && console.log("no se encontro nada Broooow") 
        }
    </ul>
    )
}
export default UlContendEnd;


