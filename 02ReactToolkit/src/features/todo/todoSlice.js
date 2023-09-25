import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: nanoid(), text: 'Hello World' }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.unshift(todo)

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)

        },
        upDatetodo: (state, action) => {
            const todo = state.todos.find((todo)=> todo.id == action.payload.id)
            todo.text = action.payload.text

        }
    }
})

export const { addTodo, removeTodo, upDatetodo } = todoSlice.actions

export default todoSlice.reducer