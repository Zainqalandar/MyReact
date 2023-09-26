import React from 'react'
import './App.css'
import { useDispatch} from 'react-redux'
import Todos from './components/Todos'
import Addtodo from './components/Addtodo'
import { clearAlltodos } from './Store/Slaics/TodoSlaics'
import { todoSlice } from './Store/Slaics/TodoSlaics'



function App() {
  console.log(todoSlice)
  let dispatch = useDispatch()

  return (
    <>
    <button onClick={()=> dispatch(clearAlltodos())}>Clear All todos</button>
      <Addtodo />
      <Todos />

    </>
  )
}

export default App
