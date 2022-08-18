const Field = ({label, type, value, name, checked}) => {

    return(
        <div>
            <label htmlFor={type}>
                {label}
            </label>
            <input
                name={name}
                id={name}
                defaultValue={value}
                onChange={checked}
                type={type} />
        </div>
    )
}

export default Field;