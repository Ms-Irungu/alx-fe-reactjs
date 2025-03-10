import RecipeList from "./Component/RecipeList" 
import AddRecipeForm from "./Component/AddRecipeForm"

function App() {


  return (
    <>
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm /> {/*Add new recipes */}
      <RecipeList /> {/*Display the list of recipes*/}
    </div>
    </>
  )
}

export default App
