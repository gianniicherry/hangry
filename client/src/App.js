import './App.css';
import React, {useState, useEffect, useContext, createContext} from 'react'
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import RecipeForm from './components/RecipeForm';
import RecipePage from './components/RecipePage';
import Navbar from './Navbar';
import Auth from "./components/Auth";
import SignOut from "./components/SignOut";
import ReviewedRecipes from "./components/ReviewedRecipes";
import {Route, Routes} from "react-router-dom";

export const UserContext = createContext();

function App() {

  const [recipes, setRecipes] = useState([])
  const [easyRecipes, setEasyRecipes] = useState([])
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
      fetch('/recipes')
      .then(r => r.json())
      .then(data => {
          setRecipes(data)
      })
  },[])

  useEffect(() => {
    fetch('/auth').then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setCurrentUser(user)
          setIsLoggedIn(true)
        });
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
    setCurrentUser(null)
  }

  
  return (
  <>
  <Navbar isLoggedIn={isLoggedIn}/>
    <div className="container">
    <UserContext.Provider value={currentUser}>
      <Routes>
          <Route path="/" element={<Home recipes={recipes} easyRecipes={easyRecipes}/>}/>
          <Route path="/auth" element={<Auth onLogin={handleLogin}/>}/>
          <Route path="/signout" element={<SignOut onLogout={handleLogout}/>}/>
          <Route path="/recipes" element={<Recipes recipes={recipes}/>}/>
          <Route path="/recipeform" element={<RecipeForm onAddRecipe={handleAddRecipe}/>}/>
          <Route path="/recipe/:id" element={<RecipePage recipe={recipes} />}/>
          <Route path="/reviewedrecipes" element={<ReviewedRecipes user={currentUser}/>}/>
      </Routes>
    </UserContext.Provider>
    </div>
  </>
  )
}

export default App;
 
