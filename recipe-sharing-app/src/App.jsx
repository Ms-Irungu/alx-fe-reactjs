import RecipeList from "./components/RecipeList" 
import AddRecipeForm from "./components/AddRecipeForm"
import RecipeDetails from "./components/RecipeDetails"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {

  return (
   <BrowserRouter>
    <nav className="navbar">
      <h1>Recipe Sharing App</h1>
      <Link to = "/">Home</Link>
      <Link to = "/add">Add Recipe</Link>
    </nav>

    <Routes> 
      <Route path = "/" element = {<RecipeList />} />
      <Route path = "/add" element = {<AddRecipeForm />} />
      <Route path = "/recipe/:id" element = {<RecipeDetails />} /> {/* Adding a dynamic route */}
    </Routes>

   </BrowserRouter>
  )
}


export default App
