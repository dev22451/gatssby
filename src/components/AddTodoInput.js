import React from 'react'

const AddTodoInput = (props) => {

    const { todoName, handleOnTodoName, handleAddTodo } = (props)
    return (
        <div className="main">
            <input type="text"
                value={todoName}
                placeholder="Add the todo name"
                onChange={handleOnTodoName}
            />
            <button
                onClick={handleAddTodo}
            >
                Add
            </button>
        </div>

    )
}
export default AddTodoInput