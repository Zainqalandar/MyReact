import React from 'react'
import {useDispatch} from 'react-redux'
import authservice from '../../appwrite/auth'
import {logout} from '../../Store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout=()=>{
        authservice.logout().then(()=>{
            dispatch(logout())
        })
    }
  return <button
  className=' border border-black inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
  onClick={handleLogout}
  >Logout</button>
  
}

export default LogoutBtn