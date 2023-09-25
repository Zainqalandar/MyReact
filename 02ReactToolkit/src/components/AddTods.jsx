import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import { useSelector } from 'react-redux'
function AddTods() {
    const dispatch = useDispatch()
    const [input, setInput] = useState()
    let handleSubmite=(e)=>{
        e.preventDefault()
        console.log(input)
        dispatch(addTodo(input))
        setInput(' ')
    }

    return (
        <form onSubmit={handleSubmite} className="flex">
            <input
                type="text"
                value={input}
                onChange={(e)=>setInput(e.currentTarget.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}

export default AddTods