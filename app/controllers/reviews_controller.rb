class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews
    end

    def show 
        review = Review.find_by(id: params[:id])
        render json: review
    end

    def create 
        review = Review.create(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find_by(id: params[:id])
        review.update(review_params)
        render json: review
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:difficulty, :description)
    end
end
