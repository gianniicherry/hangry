class Recipe < ApplicationRecord
    validates :name, presence: true
    validates :cook_time, presence:true
    validates :ingredients, presence:true
    validates :instructions, presence:true
    
    has_many :reviews
    has_many :users, through: :reviews
end
