import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' //import useNavigate from react-router-dom
import jsonData from '../data.json' //import json data from data.json

const HomePage = () => {
  const [recipes, setRecipes] = useState([]) //initialize state to store recipes
  const [error, setError] = useState(null) //initialize state to store error

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)) //Simulate a delay
        setRecipes(jsonData) //set recipes state
      } catch (error) {
        console.error('Error fetching data: ', error) //Log any errors
        setError('Failed to fetch recipes. Please try again later.') //set error state
      }
    }
    fetchData() //call the fetch data function
  }, []) //fetch recipes from the API

  return (
    <div className='p-5'>
      {/* Add Recipe Button */}
      <div className='flex justify-end mb-5'>
        <Link
          to='/add-recipe'
          className='bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600'
        >
          Add New Recipe
        </Link>
      </div>

    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
      {error && <p className='text-red-500'>{error}</p>}{' '}
      {/* Show error if fetching fails */}
      {recipes.map(recipe => (
        <article
          key={recipe.id}
          className='bg-white w-[300px] p-4 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl'
        >
          <div className='relative w-full h-40 overflow-hidden flex justify-center '>
            <img
              src={recipe.image}
              alt={recipe.title}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className='p-3'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              {recipe.title}
            </h3>
            <p className='text-gray-600 line-clamp-3'>{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className='mt-4 inline-block text-orange-500 font-medium hover:text-orange-600 transition-colors'
            >
              View Recipe →
            </Link>
          </div>
        </article>
      ))}
    </section>
    </div>
  )
}

export default HomePage
