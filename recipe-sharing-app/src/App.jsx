import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import RecipeList from "./components/RecipeList"
import AddRecipeForm from "./components/AddRecipeForm"
import RecipeDetails from "./components/RecipeDetails"


function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h1>Recipe Sharing App</h1>
        <Link to="/">Home</Link>
        <Link to="/add">Add Recipe</Link>
      </nav>

      <div className="content">
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App
