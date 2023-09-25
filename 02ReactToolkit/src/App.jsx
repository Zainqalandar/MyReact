import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTods from './components/AddTods'
import Todos from './components/todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className=' text-red-800 text-center font-bold'>Hello This is React Tookit</h1> */}
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <AddTods />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            <Todos />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
