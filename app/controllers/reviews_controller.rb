class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
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

    private

    def find_recipe
        Recipe.find(params[:recipe_id])
    end

    def review_params
        params.require(:review).permit(:id, :rating, :difficulty, :description, :recipe_id, :user_id)
    end
end
