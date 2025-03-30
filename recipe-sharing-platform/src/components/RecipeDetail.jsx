import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
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
      <div className='relative h-100 '>
        <img
          src={recipe.image}
          alt={recipe.title}
          className='w-full h-full object-cover'
        />
      </div>
      <h1 className='text-2xl font-bold text-gray-800 mt-4'>{recipe.title}</h1>
      <p className='text-gray-600 mt-2'>{recipe.summary}</p>

      {/* Ingredients */}
      <div className='mt-4'>
        <h2 className='text-xl font-semibold text-gray-700'>Ingredients</h2>
        <ul className='list-disc list-inside text-gray-600'>
          {recipe.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className='mt-4'>
        <h2 className='text-xl font-semibold text-gray-700'>Instructions</h2>
        <ol className='list-decimal list-inside text-gray-600'>
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
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
