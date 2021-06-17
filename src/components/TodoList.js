import React from 'react'
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { CgCheckO } from 'react-icons/cg';

const TodoList = (props) => {
    const { todoList, handleCheck, removeTodoList } = props;
    return (
        <div>
            {

                todoList.map((list, index) => {

                    return (
                        <div className="todolist" key={index}>
                            <input type="checkbox" checked={list.isCompleted} onChange={() => { handleCheck(index) }} />
                            {list.todoName}
                            {list.isCompleted === true && <span ><CgCheckO /></span>}

                            <span onClick={() => removeTodoList(index)}><RiDeleteBack2Fill /></span>
                        </div>
                    )

                })

            }
        </div>
    )
}
export default TodoList