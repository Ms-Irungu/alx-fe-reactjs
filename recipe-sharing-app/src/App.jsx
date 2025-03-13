import RecipeList from "./components/RecipeList" 
import AddRecipeForm from "./components/AddRecipeForm"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {

  return (
   <BrowserRouter>
    <nav>
      <Link to = "/">Home</Link>
      <Link to = "/add">Add Recipe</Link>
    </nav>

    <Routes> 
      <Route path = "/" element = {<RecipeList />} />
      <Route path = "/add" element = {<AddRecipeForm />} />
    </Routes>

   </BrowserRouter>
  )
}


export default App
