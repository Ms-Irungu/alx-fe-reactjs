import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe ={
      id: Date.now(), 
      title, 
      description
    };
    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
    navigate(`/recipe/${newRecipe.id}`);
  };

  return (
    <div className='add-recipe-form'>
      <h2> Add New Recipe </h2>
      <form className='recipe-form' onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={{ width: "300px", padding: "10px" }}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          style={{ width: "300px", height: "100px", padding: "10px" }}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>

  );
};

export default AddRecipeForm;