import { useForm } from "react-hook-form";
import "../../ComponentsCss/Atoms/Formularioemail.css";
const FormularioEmail = ({ name, type, description }) => {

    const {register, handleSubmit, formState:{errors}} = useForm(); 
    const submit = data => {
        console.log(data);
    }

return(
    <div className="card_formulario" onSubmit={handleSubmit(submit)}>
        <form action="/">
            <h2 className="title_formulario">
                { name }
            </h2>
            <p className="description_formulario"> 
            { description }
            </p>
            <fieldset className="contendformulario">
                <div >
                <label htmlFor="email">
                        <input 
                        {...register("email", {required: "El correo es Obligatorio"})}
                        type="text"
                        className="input_formulario"
                        id={type}
                        />
                </label>
                {
                    errors.email && 
                    <span color="red">
                        { errors?.email?.message }
                    </span>
                }
                </div>
            </fieldset>
            <input className="button_sign_up" 
            type="submit" value={"SIGN UP"} />
        </form>
    </div>
)
}

export default FormularioEmail;