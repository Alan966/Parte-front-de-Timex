const FormularioEmail = ({ name, type, description }) => {
return(
    <div>
        <form action="#">
            <h2>{ name }</h2>
            <p> { description }</p>
            <fieldset>
                <div>
                    <input 
                     type="text"
                     className={type}
                     id={type}
                     />
                    <label for={type}></label>
                </div>
            </fieldset>
            <input type="submit" value={"SIGN UP"} />
        </form>
    </div>
)
}

export default FormularioEmail;