import "../../../ComponentsCss/Atoms/relojes/AutocompleteRelojes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { get } from "axios";
import { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
const AutocompleteRelojes = ({url, id}) => {

    console.log(id)

   const [data, setData] = useState([]);
   const [relojes, setRelojes] = useState([])
   const[value, setValue] = useState("")
   const [relojSelecionado, setRelojSelecionado] = useState()


    
    const onSuggestionsFetchRequesteda=({value}) => {
        setRelojes(filtrarRelojes(value))
    }

    const filtrarRelojes = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLenght= inputValue.length;

        let filtrado = data.filter((reloj) => {
            let textoCompleto= reloj.description;

            if(textoCompleto.toLowerCase() 
               .normalize("NFD")
               .replace(/[\u0300-\u036f]/g, "")
               .includes(inputValue)){
                return reloj
            }
        })

        return inputLenght===0 ? []: filtrado;
    }

    const onSuggestionsClearRequesteda = () => {
        setRelojes([])
    }

    const getSuggestionValuea = (suggestion) => {
        return `${suggestion.description}`
    }

    const renderSuggestiona = (suggestion) =>(
        <div className="sugerencia" onClick={()=>
        seleccionarReloj(suggestion)}>
            {`${suggestion.description}`}
        </div>
    )

    const seleccionarReloj = (reloj) => {
        setRelojSelecionado(reloj)
    }

    const onChange = (e, {newValue}) => {
        setValue(newValue)
    }

    const inputProps={
        placeholder: "Nombre del Reloj",
        value,
        onChange
    }

    const eventoEnter = (e) => {
        if(e.key == "Enter"){
            let relojactual = data.filter(p => p.description == e.target.value.trim())

            let reloj = {
                id: relojactual[0]._id, 
                description: relojactual[0].description,
                price: relojactual[0].price,
                name: relojactual[0].name,
                submenutwo: relojactual[0].submenutwo,

            }
            seleccionarReloj(reloj)
        }
    } 

    const obtenerData = () => {
        get(url)
        .then(response => {
            const data = response.data.filter(p => (p.submenu === id || p.name === id || p.submenutwo === id)  && p.principal == "true")
            setRelojes(data);
            setData(data)
        })
        .catch(err => {
            console.log('Ocurrio un error'+ err)
        })
    }

    useEffect(()=>{
        obtenerData()
    },[id])



    return(
        <div className="App">
                <Autosuggest 
                suggestions={relojes}
                onSuggestionsFetchRequested={onSuggestionsFetchRequesteda}
                onSuggestionsClearRequested={onSuggestionsClearRequesteda}
                getSuggestionValue={getSuggestionValuea}
                renderSuggestion={renderSuggestiona}
                inputProps={inputProps}
                onSuggestionSelected={eventoEnter}
                />
                <div className='btn btn-primary button-relojes'>
                    {
                        relojSelecionado?
                        <a className="button" 
                            href={`#${relojSelecionado.description}`}
                            >
                        Ver Reloj
                        </a>
                        : 
                        <a className="button" to="/">
                        Ver Reloj
                        </a>
                    }
                </div>
        </div>
    )
}

export default AutocompleteRelojes