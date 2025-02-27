import { useState } from 'react'

import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminHomePage from './pages/adminHomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
    
     <BrowserRouter>
     <Routes path="/*"> 
     <Route path="/" element={<HomePage/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/*" element={<h1>404 error page</h1>}/>
     <Route path="/admin/*" element={<AdminHomePage/>}/>
     


     </Routes>
     
     </BrowserRouter>
     
   
    </div>
  )
}

export default App
