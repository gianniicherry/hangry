class Review < ApplicationRecord
    validates :rating, presence:true
    validates :difficulty, presence:true
    validates :description, presence:true
    
    belongs_to :recipe
    belongs_to :user
end
