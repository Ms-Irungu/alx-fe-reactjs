import { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
    );
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    // Local state for updated values
    const [title, setTitle] = useState(recipe?.title || '');
    const [description, setDescription] = useState(recipe?.description || '');
    
    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page refresh

        // Update recipe in Zustand store
        updateRecipe(recipeId, { title, description });
        
        alert("Recipe updated successfully!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default EditRecipeForm;
