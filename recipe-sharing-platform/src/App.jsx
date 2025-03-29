import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail';

function App () {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipe/:id' element={<RecipeDetail />} />
      </Routes>
    </Router>
    
      <section className='text-center mb-8 pt-8' >
        <h2 className='text-3xl font-bold text-gray-900 mb-4'>
          Discover Delicious Recipes
        </h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Explore our collection of mouth-watering recipes shared by food
          enthusiasts from around the world.
        </p>
      </section>
      <div>
        <HomePage />
      </div>
    </>
  )
}

export default App
