import React from 'react'
import HomePage from './components/HomePage'

function App () {
  return (
    <>
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
