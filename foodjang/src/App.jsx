import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './common/Header/Header'
import Footer from './common/Footer/Footer'
import useProduct from './api/mealsData'
import Home from './pages/Home/Home'
import MealRating from './pages/Meals/MealRating'
import MealReview from './pages/Meals/MealReview'
import MealCuisine from './pages/Meals/MealCuisine'
import MealPrice from './pages/Meals/MealPrice'
import MealProductAll from './pages/Meals/MealProductAll'
import MealDetail from './pages/Meals/MealDetail'
import LoginForm from './common/Login/LoginForm'

function App() {

  const food = useProduct();
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home food = {food} />} />
          <Route path='/productall' element={<MealProductAll food = {food} />} />
          <Route path='/bestproduct' element={<MealRating food = {food} />} />
          <Route path='/review' element={<MealReview food = {food} />} />
          <Route path='/price' element={<MealPrice food = {food} />} />
          <Route path='/country' element={<MealCuisine food = {food} />} />
          <Route path='/detail/:id/' element={<MealDetail food = {food} />} />
          <Route path='/login' element={<LoginForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
