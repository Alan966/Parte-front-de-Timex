import "../../../ComponentsCss/Atoms/relojes/AutocompleteRelojes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import useAxios from "../getAxios";
import { useCallback } from "react";

const AutocompleteRelojesThree = ({url , name}) => {

    const [info, setInfo] = useState([]);
    const [relojes, setRelojes] = useState([]);
    const [value, setValue] = useState("");
    const [relojesSelecionado,setRelojesSelecionado] = useState();

    const onSuggestionsFetchRequested = ({value}) =>{
        setRelojes(filtrarRelojes(value))
    }

    const filtrarRelojes = (value) => {
        const inputValue = value.trim().toLowerCase(); 
        const inputLength = inputValue.length; 
        
        let filtrado = info.filter((reloj) => {
            let textoCompleto = reloj.description; 

            if(textoCompleto.toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(inputValue)){
                return reloj
            }
                })
            
            return inputLength ===0 ? []: filtrado;
        }

        const onSuggestionsClearRequested = () => {
            setRelojes([])
        }

        const getSuggestionValue = (suggestion) => {
            return `${suggestion.description}`
        }

        const renderSuggestion = (suggestion) => {
            return(
                <div className="sugerencia" onClick={() => 
                    seleccionarReloj(suggestion)}>
                        {`${suggestion.description}`}
                </div>
            )
        }

        const seleccionarReloj = (reloj) =>{
            setRelojesSelecionado(reloj)
        }

        const onChange = (e, {newValue}) => {
            setValue(newValue)
        }
        
        const inputProps = {
            placeholder: "Nombre del Reloj", 
            value, 
            onChange
        }

        const eventEnter = (e) => {
            if(e.key === "Enter"){
                let relojactual = info.filter(p => p.description === e.target.value.trim())
                let reloj = {
                    id: relojactual[0]._id, 
                    description: relojactual[0].description, 
                    price: relojactual[0].price, 
                    name: relojactual[0].name,
                    submenutwo: relojactual[0].submenutwo
                }
                seleccionarReloj(reloj)
            }
        }

        const [data, error] = useAxios(url)

        if(error){
            console.log(error)
        }

        const peticionData = useCallback((data) =>{
            let comprovar = data.length > 0 
            if(comprovar === true){
                setRelojes(data.filter(e => (e.submenu === name || e.submenutwo === name) && e.principal === "true"))
                setInfo(data.filter(e => (e.submenu === name || e.submenutwo === name) && e.principal === "true"))
            }else{
                return null
            }
        },[name])


        useEffect(() => {
            peticionData(data? data : [])
            return () => {
                setInfo([])
                setRelojes([])
                peticionData([])
            }
        },[name, data, peticionData])

    return(
        <div className="App n90">
            <Autosuggest 
            suggestions={relojes}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            onSuggestionSelected={eventEnter}
            />
            <div className="btn btn-primary button-relojes">
                {
                    relojesSelecionado ? 
                    <a className="button"  
                     href={`#${relojesSelecionado.description}`}>
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

export default AutocompleteRelojesThree;