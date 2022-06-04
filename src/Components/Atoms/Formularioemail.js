import "../../ComponentsCss/Atoms/Formularioemail.css";
const FormularioEmail = ({ name, type, description }) => {
return(
    <div className="card_formulario">
        <form action="#">
            <h2 className="title_formulario">
                { name }
            </h2>
            <p className="description_formulario"> 
            { description }
            </p>
            <fieldset className="contendformulario">
                <div >
                    <input 
                     type="text"
                     className="input_formulario"
                     id={type}
                     />
                    <label for={type}></label>
                </div>
            </fieldset>
            <input className="button_sign_up" type="submit" value={"SIGN UP"} />
        </form>
    </div>
)
}

export default FormularioEmail;