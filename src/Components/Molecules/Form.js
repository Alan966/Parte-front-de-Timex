import { useForm } from "react-hook-form"
import "../../ComponentsCss/Moleculas/Forms.css"
const Form = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();

    const sumbit = data => {
        console.log(data)
    }

    return(
        <form className="form" action="/formulario" onSubmit={handleSubmit(sumbit)}>
            <div className="container">
                <input 
                    className="input_buscar"
                    {...register("buscador", {required: "No busco Nada"})}
                    type="text" 
                    name="buscador"
                    id="buscador"
                    placeholder="       Buscar"
                    required
                    /> 
               <label 
                    className="label_buscar" 
                    data-name="Buscars"
                    htmlFor="buscar">    
                </label>
            </div>
                {
                    errors.buscador&&
                    <p>{errors.buscador.message}</p>
                }
        </form>
    )
}

export default Form;