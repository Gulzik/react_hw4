import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes from "./TodoList.module.css"
import Modal from "../../components/Modal/Modal";
import List from "../../components/List/List";

// let isShow = true;

const TodoList = () => {
    const [isShow, setIsShow] = useState(false)
    const [newTitle, setNewTitle] = useState('');
    const [search, setSearch] = useState('')
    const [currentEdit, setCurrentEdit] = useState()
    // localStorage.setItem('list', JSON.stringify([]))
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || [])

    // console.log(isShow, 'state')
    const handleShow = () => setIsShow(!isShow);

    const handleAdd = () => {
        console.log('ed')
        localStorage.setItem('list',  JSON.stringify([...list, {id: list.length + 1, title: newTitle, completed: false}]))

        // localStorage.setItem('list',  JSON.stringify([...list, {id: (+list[list.length - 1]?.id + 1) || 0, title: newTitle, completed: false}]))
        // setList((prevTodo) => {
        //     return
        // })
        setList(JSON.parse(localStorage.getItem('list')))
        setNewTitle('')
        handleShow()
    }

    const handleDone = (id) => {
        const currentIndex = list.findIndex((todo) => todo.id === id);
        list[currentIndex].completed = !list[currentIndex].completed;

        setList([...list]);
        console.log(id, 'id', currentIndex, 'index')
    }

    const handleChangeText = (event) =>{
        setNewTitle(event.target.value)
        // console.log(newTitle, 'new text')
    }

    const handleDelete = (id) => {
        const filtered = list.filter(todo => todo.id !== id)
        localStorage.setItem('list', JSON.stringify(filtered))
        console.log(filtered)
        setList(JSON.parse(localStorage.getItem('list')));
    }


    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search, 'search')

    }
    const handleEdit = (editTodo) => {
        const editList = list.map(todo => {
            if(todo.id === editTodo.id) {
                return {...todo, title: editTodo.title}
            }
            return todo
        })
        setList([...editList]);
        setCurrentEdit()
    }

    const resultSearch = list.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className={classes.wrapper}>
            <Button onClick={handleShow}>
                Добавить
            </Button >
            <Input
                placeholder={'search...'}
                onChange={handleSearch}
                value={search}
                name={'search'}

            />
            { isShow &&  <Modal handleshow={handleShow}>
                <p>{newTitle}</p>
                <Input
                    placeholder={'Добавить'}
                    onChange={handleChangeText}
                    name={'add'}
                    value={newTitle}
                />
                <Button onClick={handleAdd}>
                    Добавить
                </Button>
                <button onClick={handleShow}>Close</button>
            </Modal>}

            <List
                list={resultSearch}
                handleChangeCurrent={setCurrentEdit}
                handleDone={handleDone}
                handleDelete={handleDelete}
                currentEdit={currentEdit}
                handleEdit={handleEdit}
            />


        </div>
    )
}

export default TodoList