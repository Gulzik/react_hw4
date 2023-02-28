// import classes from "./List.module.css";
import TodoCard from "../TodoCard/TodoCard";
const List = ({
                  list,
                  handleDone,
                  handleDelete,
                  currentEdit,
                  handleChangeCurrent,
                  handleEdit }) => {
    return (
        <>
            {list.map(todo=> <TodoCard
                key={todo.id}
                todo={todo}
                handleChangeCurrent={handleChangeCurrent}
                handleDone={handleDone}
                handleDelete={handleDelete}
                currentEdit={todo.id === currentEdit}
                handleEdit={handleEdit}
            />)}

        </>
    )

}
export default List