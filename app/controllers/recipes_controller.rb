class RecipesController < ApplicationController

    def index
        recipes = Recipe.all 
        render json: recipes 
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: recipe, include: ['reviews']
    end

    def create
        recipe = Recipe.create(recipe_params)
        render json: recipe, status: :created
    end

    def update 
        recipe = Recipe.find_by(id: params[:id])
        recipe.update(recipe_params)
        render json: recipe
    end



    private 

    def recipe_params
        params.permit(:name,:img, :cook_time, :ingredients, :instructions)
    end
end
