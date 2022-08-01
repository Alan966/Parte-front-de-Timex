import "../../../ComponentsCss/Atoms/relojes/AutocompleteRelojes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import useAxios from "../getAxios";
import { useCallback } from "react";

const AutocompleteRelojes = ({url, id})=> {

   const [date, setData] = useState([]);
   const [relojes, setRelojes] = useState([])
   const[value, setValue] = useState("")
   const [relojSelecionado, setRelojSelecionado] = useState()


    
    const onSuggestionsFetchRequesteda=({value}) => {
        setRelojes(filtrarRelojes(value))
    }

    const filtrarRelojes = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLenght =  inputValue.length;

        let filtrado = date.filter((reloj) => {
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
        if(e.key === "Enter"){
            let relojactual = date.filter(p => p.description === e.target.value.trim())
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

    const [ data, error ] = useAxios(url)


    if(error){
        console.log(error)
    }

    const getData = useCallback((data) => {
        let variable = data.length > 0
        if(variable === true){
            if(id !== "COMING SOON" && id !== "SHOP NEW ARRIVALS" && id !== "WOMENS" && id !== "Bracelet Watches" && id !== "Crystal Watches" && id !== "NEW" && id !== "WATCHES" ){
                setRelojes( data.filter(e => (e.submenu === id || e.submenutwo === id || e.name === id) && e.principal === "true")) 
                setData(data.filter(e => (e.submenu === id || e.submenutwo === id || e.name === id) && e.principal === "true")) 
            }else if(id === "NEW" || id === "WATCHES"){
                const date = data.filter(e =>  e.name === id)
                const date2 = date.slice(0,400)
                const date3 = date2.filter(e => e.principal === "true" && e.name === id)
                setRelojes( date3) 
                setData(date3) 
            }else if( id === "WOMENS"){
                setRelojes( data.filter(e => e.submenu === "WOMENS NEW ARRIVALS"  && e.principal === "true")) 
                setData(data.filter(e => e.submenu === "WOMENS NEW ARRIVALS"  && e.principal === "true")) 

            }else if(id === "Bracelet Watches"){
                setRelojes( data.filter(e => e.submenutwo === "Automatic Watches"  && e.principal === "true")) 
                setData(data.filter(e => e.submenutwo === "Automatic Watches"  && e.principal === "true")) 

            }else if(id === "Crystal Watches"){
                setRelojes( data.filter(e => e.submenutwo === "Timex X Peanuts"  && e.principal === "true")) 
                setData(data.filter(e => e.submenutwo === "Timex X Peanuts"  && e.principal === "true")) 
            }
            else{
                setRelojes( data.filter(e => e.submenu === "MENS NEW ARRIVALS"  && e.principal === "true")) 
                setData(data.filter(e => e.submenu === "MENS NEW ARRIVALS"  && e.principal === "true")) 
            }
        }else{
            return null
        }

    },[id])

    useEffect(()=>{
        getData(data ? data: [])
        return () => {
            setData([])
            setRelojes([])
            getData([])
        }
    },[id, data, getData])



    return(
        <div className="App n90">
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
                        <div className="button">
                        Ver Reloj
                        </div>
                    }
                </div>
        </div>
    )
}

export default AutocompleteRelojes