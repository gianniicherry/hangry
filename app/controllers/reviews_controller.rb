class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :lessmore]
    def index
        reviews = Review.all
        render json: reviews, include: ["users"]
    end

    def show 
        review = Review.find_by(id: params[:id])
        render json: review
    end

    def create
        recipe = find_recipe
        review = recipe.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find_by(id: params[:id])
        current_user = User.find_by(id: session[:user_id])
        
        if current_user && review && current_user.id == review.user_id
          review.update!(review_params)
          render json: review
        else
          render json: { error: "Not Authorized" }, status: :unauthorized
        end
      end

    def destroy
        review = Review.find_by(id: params[:id])
        current_user = User.find_by(id: session[:user_id])
        if current_user && review && current_user.id == review.user_id
        review.destroy
        head :no_content
        else
        render json: {error: "Not Authorized"}, status: :unauthorized
        end 
    end

    #make a custom route that takes in two parameters, a number and a word. 
    #The word must be "less" or "more", any other words will generate an error message saying "you must specificy less or more." 
    #Given that the word is less or more, 
    #use the number to find all reviews that are less/more than that number (including that number). 
    #Then find all the recipe objects associated with those reviews, 
    #make sure that the list does not include duplicates when you send it back. 
    #If there are no reviews that meet the less than more than criterion then render a message that says so.


    def lessmore
        if params[:l] === "less"
           reviews = Review.where("rating < ?", params[:n])
           recipes = reviews.map do |r|
            {review: r.recipe}
           end
           render json: recipes
        elsif params[:l] === "more"
            reviews = Review.where('rating > ?', params[:n])
            recipes = reviews.map do |r|
                {recipe: r.recipe}
            end
            render json: recipes
        else
            render json: {error: "you must specificy less or more."}, status: :not_found
        end

    end

    private

    def find_recipe
        Recipe.find(params[:recipe_id])
    end

    def review_params
        params.require(:review).permit(:id, :rating, :difficulty, :description, :recipe_id, :user_id)
    end
end
