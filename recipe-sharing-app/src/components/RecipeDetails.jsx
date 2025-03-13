import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';


const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === Number(id))
  );

  if (!recipe) {
    return(
      <div className='not-found-container'>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate('/')}>Return to Home</button>
      </div>
    );
  }

  return (
    <div className='recipe-container'>
      <h1 className="recipe-title">{recipe.title}</h1>
      <p className="recipe-description">{recipe.description}</p>

      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      <div className="recipe-actions">
        <EditRecipeForm recipeId={Number(id)} />
        <DeleteRecipeButton recipeId={Number(id)} />
      </div>
    </div>
  );
};

export default RecipeDetails;