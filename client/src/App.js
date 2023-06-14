import './App.css';
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import RecipeForm from './components/RecipeForm';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom"

function App() {
  
  return (
  <>
  <Navbar/>
    <div className="container">
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/recipes" element={<Recipes />}/>
          <Route path="/recipeform" element={<RecipeForm />}/>
      </Routes>
    </div>
  </>
  )
}

export default App;
