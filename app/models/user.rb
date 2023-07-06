class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true
    validates :password, presence: true 
    
    has_many :reviews
    has_many :recipes,through: :reviews

    def unique_recipes
        self.recipes.uniq
    end
end
