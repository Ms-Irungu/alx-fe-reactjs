import { useState } from "react";

const AddRecipeForm = () => {
  // State to store form inputs
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe Submitted:", { title, ingredients, steps });
    if (!title || !ingredients || !steps) {
      alert("Please fill in all fields.");
      return;
    }

    // Reset form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title Input */}
        <div>
          <label className="block font-semibold">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2 mt-1"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients Textarea */}
        <div>
          <label className="block font-semibold">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded p-2 mt-1"
            placeholder="Enter ingredients, separated by commas"
          />
        </div>

        {/* Preparation Steps Textarea */}
        <div>
          <label className="block font-semibold">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded p-2 mt-1"
            placeholder="Describe the preparation steps"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
