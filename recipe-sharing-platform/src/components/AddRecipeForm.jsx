import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddRecipeForm = ({ onAddRecipe }) => {
  const navigate = useNavigate()

  // State to handle form inputs
  const [recipe, setRecipe] = useState({
    title: '',
    summary: '',
    image: '',
    ingredients: [],
    instructions: [],
    prepTime: '',
    cookTime: '',
    servings: '',
    difficulty: 'Easy'
  })

  // State for dynamically adding ingredients and instructions
  const [ingredient, setIngredient] = useState('')
  const [instruction, setInstruction] = useState('')

  // Handle change for text inputs
  const handleChange = e => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value })
  }

  // Add an ingredient
  const addIngredient = () => {
    if (ingredient.trim()) {
      setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ingredient] })
      setIngredient('') // Clear input field
    }
  }

  // Add an instruction
  const addInstruction = () => {
    if (instruction.trim()) {
      setRecipe({
        ...recipe,
        instructions: [...recipe.instructions, instruction]
      })
      setInstruction('') // Clear input field
    }
  }

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()

    if (
      !recipe.title ||
      !recipe.summary ||
      !recipe.image ||
      !recipe.ingredients.length ||
      !recipe.instructions.length
    ) {
      alert('Please fill in all required fields.')
      return
    }

    // Create new recipe object with an ID
    const newRecipe = {
      id: Date.now(),
      ...recipe
    }

    onAddRecipe(newRecipe) // Update parent state
    navigate('/') // Redirect to homepage
  }

  return (
    <div className='max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4'>
        Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Title */}
        <input
          type='text'
          name='title'
          value={recipe.title}
          onChange={handleChange}
          placeholder='Recipe Title'
          className='w-full p-2 border rounded'
          required
        />

        {/* Summary */}
        <textarea
          name='summary'
          value={recipe.summary}
          onChange={handleChange}
          placeholder='Brief description of the recipe'
          className='w-full p-2 border rounded'
          required
        ></textarea>

        {/* Image URL */}
        <input
          type='text'
          name='image'
          value={recipe.image}
          onChange={handleChange}
          placeholder='Image URL'
          className='w-full p-2 border rounded'
          required
        />

        {/* Ingredients */}
        <div>
          <label className='font-semibold text-gray-700'>Ingredients:</label>
          <div className='flex'>
            <input
              type='text'
              value={ingredient}
              onChange={e => setIngredient(e.target.value)}
              placeholder='Add ingredient'
              className='w-full p-2 border rounded'
            />
            <button
              type='button'
              onClick={addIngredient}
              className='ml-2 bg-orange-400 text-white px-3 py-1 rounded'
            >
              Add
            </button>
          </div>
          <ul className='mt-2 text-sm text-gray-700'>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>• {ing}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <label className='font-semibold text-gray-700'>Instructions:</label>
          <div className='flex'>
            <input
              type='text'
              value={instruction}
              onChange={e => setInstruction(e.target.value)}
              placeholder='Add instruction'
              className='w-full p-2 border rounded'
            />
            <button
              type='button'
              onClick={addInstruction}
              className='ml-2 bg-orange-400 text-white px-3 py-1 rounded'
            >
              Add
            </button>
          </div>
          <ul className='mt-2 text-sm text-gray-700'>
            {recipe.instructions.map((inst, index) => (
              <li key={index}>• {inst}</li>
            ))}
          </ul>
        </div>

        {/* Prep Time & Cook Time */}
        <div className='flex gap-4'>
          <input
            type='text'
            name='prepTime'
            value={recipe.prepTime}
            onChange={handleChange}
            placeholder='Prep Time (e.g. 10 minutes)'
            className='w-1/2 p-2 border rounded'
          />
          <input
            type='text'
            name='cookTime'
            value={recipe.cookTime}
            onChange={handleChange}
            placeholder='Cook Time (e.g. 20 minutes)'
            className='w-1/2 p-2 border rounded'
          />
        </div>

        {/* Servings & Difficulty */}
        <div className='flex gap-4'>
          <input
            type='number'
            name='servings'
            value={recipe.servings}
            onChange={handleChange}
            placeholder='Servings'
            className='w-1/2 p-2 border rounded'
          />
          <select
            name='difficulty'
            value={recipe.difficulty}
            onChange={handleChange}
            className='w-1/2 p-2 border rounded'
          >
            <option value='Easy'>Easy</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Advanced'>Advanced</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600'
        >
          Add Recipe
        </button>
      </form>
    </div>
  )
}

export default AddRecipeForm
