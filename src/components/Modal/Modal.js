import classes from "./Modal.module.css"


const Modal = ({children, handleshow}) => {
    return (
        <>
            <div onClick={handleshow}  className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                {children}
            </div>
        </>

    )
}

export default Modal