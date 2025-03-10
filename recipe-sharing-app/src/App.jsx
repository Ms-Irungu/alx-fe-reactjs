import RecipeList from "./components/RecipeList" 
import AddRecipeForm from "./components/AddRecipeForm"

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
