import React, { useState } from 'react'
import TodoList from '../components/TodoList'
import AddTodoInput from '../components/AddTodoInput'

function TodoContainer() {

    const [todoList, setTodoList] = useState([])
    const [todoName, setTodoName] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)


    const handleOnTodoName = (e) => {
        setTodoName(e.target.value)

    }
    const handleAddTodo = () => {

        setTodoList([...todoList, { todoName, isCompleted }])
        setTodoName('')
    }

    const removeTodoList = (index) => {
        const remove = [...todoList];
        remove.splice(index, 1);
        setTodoList(remove)
    }

    const handleCheck = (index) => {

        let refList = [...todoList]
        if (!refList[index].isCompleted)
            refList[index].isCompleted = true
        else
            refList[index].isCompleted = false
        setTodoList([...refList])


    }

    return (
        <div className="todocontainer">
            <AddTodoInput
                todoName={todoName}
                handleOnTodoName={handleOnTodoName}
                handleAddTodo={handleAddTodo}
            />
            <TodoList todoList={todoList}
                handleCheck={handleCheck}
                removeTodoList={removeTodoList} />
        </div>
    )
}
export default TodoContainer