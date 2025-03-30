import { useState } from "react";

const AddRecipeForm = () => {
  // State to store form inputs
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // State to track validation errors

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients.split(",").map((item) => item.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Enter at least two ingredients.";
      }
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) return; // Stop submission if validation fails

    console.log("Recipe Submitted:", { title, ingredients, steps });

    // Reset form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg mt-10 md:mt-16 md:p-8">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-3xl">Add a New Recipe</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title Input */}
        <div>
          <label className="block font-semibold text-lg md:text-xl">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2 mt-1 md:p-3"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients Textarea */}
        <div>
          <label className="block font-semibold text-lg md:text-xl">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded p-2 mt-1 md:p-3"
            placeholder="Enter ingredients, separated by commas"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps Textarea */}
        <div>
          <label className="block font-semibold text-lg md:text-xl">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded p-2 mt-1 md:p-3"
            placeholder="Describe the preparation steps"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600 transition md:py-3 md:text-lg"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
