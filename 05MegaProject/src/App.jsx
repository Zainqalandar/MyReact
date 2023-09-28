import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { Header, Footer } from './components'
import authservice from './appwrite/auth.js'
import { login , logout } from './Store/authSlice'


function App() {
  const [loading, setLoading] = useState(true)  
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
    
  }, [])

  return !loading ? (
    <div className="App">
      <Header />
      <Footer />
    </div>
  ) : null;
}

export default App
