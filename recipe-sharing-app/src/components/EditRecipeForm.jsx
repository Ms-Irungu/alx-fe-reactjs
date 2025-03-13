import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
    );
    
    return (
        <form>
        <input type="text" value={recipe.title} />
        <textarea value={recipe.description} />
        <button type="submit">Update Recipe</button>
        </form>
    );
    };

export default EditRecipeForm;