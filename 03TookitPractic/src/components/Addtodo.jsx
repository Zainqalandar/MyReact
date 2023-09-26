import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Store/Slaics/TodoSlaics'
function Addtodo() {
    const [input, setInput] = useState()
    let dispatch = useDispatch()
    let handleSubmite = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')

    }
    return (
        <div>
            <form onSubmit={handleSubmite}>
                <div className=' w-1/2 mx-auto text-center'>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className=' border border-black p-2 w-1/2 my-5 rounded-l-lg outline-2 outline-lime-500'
                        type="text"
                    />
                    <button
                        className='border bg-red-500 border-black p-2 rounded-r-lg'
                    >
                        Add
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Addtodo