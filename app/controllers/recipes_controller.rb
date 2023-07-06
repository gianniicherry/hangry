class RecipesController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def index
        if current_user
          reviewed_recipes = current_user.recipes
          render json: {
            reviewed_recipes: reviewed_recipes
          }
        else
          recipes = Recipe.all 
          render json: recipes
        end
      end

    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: recipe, include: ['reviews']
    end

    def create
        recipe = Recipe.create!(recipe_params)
        render json: recipe, status: :created
    end

    def update 
        recipe = Recipe.find_by(id: params[:id])
        recipe.update!(recipe_params)
        render json: recipe
    end



    private 

    def recipe_params
        params.permit(:name,:img, :cook_time, :ingredients, :instructions)
    end

    def current_user
        User.find_by(id: params[:user_id])
    end

    def logged_in?
        !!session[:user_id]
    end

    
end
