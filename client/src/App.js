import './App.css';
import React, {useState, useEffect} from 'react'
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import RecipeForm from './components/RecipeForm';
import RecipePage from './components/RecipePage';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom"


function App() {

  const [recipes, setRecipes] = useState([])
  const [easyRecipes, setEasyRecipes] = useState([])

  useEffect(()=>{
      fetch('http://localhost:4001/recipes')
      .then(r => r.json())
      .then(data => {
          setRecipes(data)
      })
  },[])

  function handleAddRecipe(newRecipe){
    setRecipes([...recipes, newRecipe])
  }
  
  return (
  <>
  <Navbar/>
    <div className="container">
      <Routes>
          <Route path="/" element={<Home recipes={recipes} easyRecipes={easyRecipes}/>}/>
          <Route path="/recipes" element={<Recipes recipes={recipes}/>}/>
          <Route path="/recipeform" element={<RecipeForm onAddRecipe={handleAddRecipe}/>}/>
          <Route path="/recipe/:id" element={<RecipePage recipe={recipes}/>}/>
      </Routes>
    </div>
  </>
  )
}

export default App;
