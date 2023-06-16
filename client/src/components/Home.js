import React, {useEffect, useState} from "react"
import AllRecipes from './AllRecipes'
import EasyRecipes from "./EasyRecipes"


 function Home(){
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch('/recipes')
        .then(r => r.json())
        .then(data => setRecipes(data))
    },[])


    return (
    <div>
        <h1>Home</h1>
        <div>
            <div>
                <h2>All Recipes</h2>
                <AllRecipes />
            </div>
            <div>
                <h2>Easy to make</h2>
                <EasyRecipes />
            </div>
        </div>
    </div>
    )
}

export default Home