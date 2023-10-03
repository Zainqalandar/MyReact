import { useDispatch } from 'react-redux'
import React, { useEffect, useRef, useState } from 'react'
import { Header, Footer } from './components'
import authservice from './appwrite/auth.js'
import { login, logout } from './Store/authSlice'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const inputref = useRef()

  useEffect(() => {
    authservice.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))


  }, [])
  useEffect(() => {
    inputref.current?.focus();
  }, [])


  return !loading ? (
    <div className=' min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="Appw-full block">
        <Header />
        <main>
          Todos: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App
