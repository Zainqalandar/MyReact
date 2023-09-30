import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin  } from '../Store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import authservice from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmite} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError('')
        try {
          const session =   await authservice.login(data)
          if(session){
            const userData =  authservice.getCurrentUser()
            if(userData) dispatch(authLogin(userData))
            navigate("/")

          }
            
        } catch (error) {
            setError(error.message)
            
        }
    }
  return (
    <div>Login</div>
  )
}

export default Login