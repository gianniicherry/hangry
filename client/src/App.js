import './App.css';
import React, {useState, useEffect} from 'react'
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import RecipeForm from './components/RecipeForm';
import RecipePage from './components/RecipePage';
import Navbar from './Navbar';
import Auth from "./components/Auth";
import SignOut from "./components/SignOut";
import ReviewedRecipes from "./components/ReviewedRecipes";
import {Route, Routes} from "react-router-dom";


function App() {

  const [recipes, setRecipes] = useState([])
  const [easyRecipes, setEasyRecipes] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
      fetch('http://localhost:4001/recipes')
      .then(r => r.json())
      .then(data => {
          setRecipes(data)
      })
  },[])

  useEffect(() => {
    fetch('/auth').then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setCurrentUser(user);
    setIsLoggedIn(true)
  }

  function handleAddRecipe(newRecipe){
    setRecipes([...recipes, newRecipe])
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setIsLoggedIn(false));
  }

   console.log(currentUser)
  
  return (
  <>
  <Navbar isLoggedIn={isLoggedIn}/>
    <div className="container">
      <Routes>
          <Route path="/" element={<Home recipes={recipes} easyRecipes={easyRecipes}/>}/>
          <Route path="/auth" element={<Auth onLogin={handleLogin}/>}/>
          <Route path="/signout" element={<SignOut onLogout={handleLogout}/>}/>
          <Route path="/recipes" element={<Recipes recipes={recipes}/>}/>
          <Route path="/recipeform" element={<RecipeForm onAddRecipe={handleAddRecipe}/>}/>
          <Route path="/recipe/:id" element={<RecipePage recipe={recipes} user={currentUser}/>}/>
          <Route path="/reviewedrecipes" element={<ReviewedRecipes user={currentUser}/>}/>
      </Routes>
    </div>
  </>
  )
}

export default App;
