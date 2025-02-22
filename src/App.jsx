import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ProductCard></ProductCard>   
     <ProductCard name="Laptop" price="$99.99" src="https://i.pinimg.com/564x/85/22/34/8522346c05525356198706df30c7ebe0.jpg"></ProductCard> 
     <ProductCard name="iphone" price="$356.99" src="https://i.pinimg.com/564x/85/22/34/8522346c05525356198706df30c7ebe0.jpg"></ProductCard>
     <ProductCard name="iphone 14" price="$896.99"></ProductCard> */}
     {/* <Testing></Testing> */}
     {/* <LoginPage></LoginPage> */}
     <HomePage></HomePage>
     
   
    </>
  )
}

export default App
