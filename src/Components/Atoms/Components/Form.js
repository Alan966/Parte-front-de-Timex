const Form = ({onSubmit, children}) => {
return(
    <div>
        <form  className="" onSubmit={onSubmit}>
            {
                children
            }
        </form>
    </div>
)
}

export default Form;