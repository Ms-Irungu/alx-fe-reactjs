import React, { useState, useEffect, use } from 'react'
import jsonData from '../data.json'

const HomePage = () => {
  const [recipes, setRecipes] = useState([]) //initialize state to store recipes
  const [error, setError] = useState(null) //initialize state to store error

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)) //Simulate a delay    
        setRecipes(jsonData) //set recipes state
      } catch (error) {
        console.error('Error fetching data: ', error) //Log any errors
      }
    }
    fetchData() //call the fetch data function

  }, []) //fetch recipes from the API

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
            <img src='recipe.image' alt='recipe.title'/>
            <div>
                <h3>{recipe.title}</h3>
                <p>{recipe.summary}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default HomePage
