import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Clock, Users } from 'lucide-react'
import jsonData from '../data.json'

const RecipeDetail = () => {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate a delay
        const foundRecipe = jsonData.find(r => r.id === parseInt(id)) //r is the recipe object
        if (!foundRecipe) {
          throw new Error('Recipe not found')
        }
        setRecipe(foundRecipe)
      } catch (error) {
        console.error('Error fetching recipe:', error)
        setError('Recipe not found.')
      }
    }
    fetchRecipe()
  }, [id])

  if (error) return <p className='text-red-500 text-center'>{error}</p>
  if (!recipe) return <p className='text-gray-500 text-center'>Loading...</p>

  return (
    <section className='max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg'>
      <div className='relative h-96 '>
        <img
          src={recipe.image}
          alt={recipe.title}
          className='w-full h-full object-cover'
        />
      </div>
      <h1 className='text-2xl font-bold text-gray-800 mt-4'>{recipe.title}</h1>
      <p className='text-gray-600 mt-2'>{recipe.summary}</p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-8'>
        <div className='flex items-center gap-3'>
          <Clock className='w-5 h-5 text-orange-500' />
          <div>
            <p className='text-sm text-gray-500'>Prep Time</p>
            <p className='font-medium'>{recipe.prepTime}</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <Clock className='w-5 h-5 text-orange-500' />
          <div>
            <p className='text-sm text-gray-500'>Cook Time</p>
            <p className='font-medium'>{recipe.cookTime}</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <Users className='w-5 h-5 text-orange-500' />
          <div>
            <p className='text-sm text-gray-500'>Servings</p>
            <p className='font-medium'>{recipe.servings} people</p>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div className='mt-6'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>Ingredients</h2>
        <ul className='space-y-3'>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className='flex items-center gap-3'>
              <div className='w-2 h-2 rounded-full bg-orange-500'></div>
              <span className='text-gray-700'>{ingredient}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className='mt-6'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>Instructions</h2>
        <ol className='space-y-6'>
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className='flex gap-4'>
              <span className='flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center font-medium'>
                {index + 1}
              </span>
              <p className='text-gray-700'>{instruction}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Back Button */}
      <Link
        to='/'
        className='mt-6 inline-block text-orange-500 font-medium hover:text-orange-600'
      >
        ← Back to Recipes
      </Link>
    </section>
  )
}

export default RecipeDetail
