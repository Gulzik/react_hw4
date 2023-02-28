import classes from "./ButtonAction.module.css";


const ButtonAction = ({ children, type, handleClick, todo }) => {
    return (
        <button onClick={() => handleClick(todo.id)}
                className={classes['actionButton'] + ' ' + classes[type]}>
            {children}
        </button>
    )
}

export default ButtonAction