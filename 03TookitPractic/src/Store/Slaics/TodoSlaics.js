import { createSlice, nanoid } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [{ id: nanoid(), text: 'Hello World' }],
    reducers: {
        addTodo: (state, action) => {
            let todo = {
                id: nanoid(),
                text: action.payload
            }
            state.push(todo)
        },
        removeTodo: (state, action) => {
            // return state.filter((todo) => todo.id !== action.payload)
            state.splice(action.payload, 1)
        },
        updateTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload.id)
            todo.text = action.payload.text
        },
        clearAlltodos: (state, action) => {
            return []
        }
    }

})

export const { addTodo, removeTodo, updateTodo, clearAlltodos } = todoSlice.actions

