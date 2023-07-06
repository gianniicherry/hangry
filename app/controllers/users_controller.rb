class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    

    def show 
        current_user = User.find_by(id: session[:user_id])
        render json: current_user
    end

    def create 
        user = User.create!(user_params)
        render json: user
    end

    private 

    def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end

    def user_params
        params.permit(:username, :password)
    end
end
