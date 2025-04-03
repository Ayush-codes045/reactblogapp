import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  //network request me time so good practise
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  //ask logged in ho ya nhi ho
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        //store ke andar important information send krna hoga that is user data
        dispatch(login({userData}))
      } else {
        //agar userdata nhi mila tho update state ke do ki login nhi ho
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
         <Outlet /> 
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App