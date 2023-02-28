import classes from "./Input.module.css"


const Input = ({ placeholder, onChange, value, name}) => {
    return (
            <input
                className={classes.input}
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}/>



    )
}

export default Input