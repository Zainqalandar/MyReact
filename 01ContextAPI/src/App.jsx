import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'

function App() {
  const [themMode, setThemMode] = useState('light')
  let lightThem = () => {
    setThemMode('light')
  }
  let DarkThem = () => {
    setThemMode('dark')
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themMode)
  }, [themMode])
  

  return (
    <>
      <ThemeProvider value={{ themMode, lightThem, DarkThem }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />

            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
