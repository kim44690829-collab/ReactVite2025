import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Counter from './ReduxEx/Counter'
import Counter from './ReduxToolkit/counter'
import Cart from './CartEx/Cart'
import Cart01 from './CartEx/Cart01'
import Test from './test'
import Header from './components/Header'
import Footer from './components/Footer'
// import Section from './pages/section'
// import CartPage from './pages/cartPage'
import Section from './pages/section01'
import CartPage from './pages/cartPage01'


function App() {
  // const [totalPrice, setTotalPrice] = useState(0)
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Section totalPrice = {totalPrice} setTotalPrice = {setTotalPrice} />} /> */}
        <Route path='/' element={<Section  />} />
        <Route path='/cart' element={<CartPage />} />
        {/* <Route path='/cart' element={<CartPage totalPrice = {totalPrice} setTotalPrice = {setTotalPrice} />} /> */}
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
