import React, {useState} from 'react'

function RecipeForm(){

    const [name, setName] = useState("")
    const [cookTime, setCookTime] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [instructions, setInstructions] = useState("")

    return (
    <div>
        <h1>Recipe Form</h1>
        <form>
            <label> Recipe Name:
                <input
                    type="text"
                    name="Recipe Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                >
                </input>
            </label>
            <br />
            <label> Time to Cook:
                <input
                    type="text"
                    name="Cook Time"
                    value={cookTime}
                    onChange={e => setCookTime(e.target.value)}
                >
                </input>
            </label>
            <br />
            <label> Ingredients:
                <input
                    type="text"
                    name="Ingredients"
                    value={ingredients}
                    onChange={e => setIngredients(e.target.value)}
                >
                </input>
            </label>
            <br />
            <label> Instructions:
                <input
                    type="text"
                    name="Instructions"
                    value={instructions}
                    onChange={e => setInstructions(e.target.value)}
                >
                </input>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

export default RecipeForm