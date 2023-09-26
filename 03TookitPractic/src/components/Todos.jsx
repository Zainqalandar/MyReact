import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../Store/Slaics/TodoSlaics'

function Todos() {
    let data = useSelector(state => state)
    let dispatch = useDispatch()
    let hanleupdateTodo=(id, text)=>{
        dispatch(updateTodo({id, text}))
    }

    
    return (
        <>
            <ul className=' border w-1/2 mx-auto'>
                {
                    data.map((todo) => <li key={todo.id}>
                        <input
                            className=' w-1/2'
                            value={todo.text}
                            onChange={(e) => hanleupdateTodo(todo.id, e.target.value)}
                            type="text"
                        />
                        <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </li>)
                }
            </ul>

        </>
    )
}

export default Todos