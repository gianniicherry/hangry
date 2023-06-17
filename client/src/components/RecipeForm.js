import React, {useState} from 'react'
import {FormContainer, Label, Input, StyledButton} from '../styles/recipeForm.styles'

function RecipeForm({onAddRecipe}){

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [cookTime, setCookTime] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [instructions, setInstructions] = useState("")
    

    function handleSubmit(e){
        e.preventDefault()
        const recipeData = {
            name: name,
            img: image,
            cook_time: cookTime,
            ingredients: ingredients,
            instructions: instructions
        }
        fetch('/recipes',{
            method: "POST",
            headers: {"Content-Type" : "application/json",
        },
            body: JSON.stringify(recipeData)
        })
            .then(r => r.json())
            .then((newRecipe) => onAddRecipe(newRecipe))
    }


    return (
    <div>
        <h1>Recipe Form</h1>
    <FormContainer>
        <form onSubmit={handleSubmit}>
            <Label> Recipe Name:
                <Input
                    type="text"
                    name="Recipe Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                >
                </Input>
            </Label>
            <br />
            <Label> Time to Cook:
                <Input
                    type="text"
                    name="Cook Time"
                    value={cookTime}
                    onChange={e => setCookTime(e.target.value)}
                >
                </Input>
            </Label>
            <br />
            <Label> Ingredients:
                <Input
                    type="text"
                    name="Ingredients"
                    value={ingredients}
                    onChange={e => setIngredients(e.target.value)}
                >
                </Input>
            </Label>
            <br />
            <Label> Instructions:
                <Input
                    type="text"
                    name="Instructions"
                    value={instructions}
                    onChange={e => setInstructions(e.target.value)}
                >
                </Input>
            </Label>
            <br />
            <Label> Add an Image:
                <Input
                    type="text"
                    name="image"
                    value={image}
                    onChange={e=> setImage(e.target.value)}
                    >
                </Input>
            </Label>
            <br />
            <StyledButton type="submit">Submit</StyledButton>
        </form>
    </FormContainer>
    </div>
    )
}

export default RecipeForm