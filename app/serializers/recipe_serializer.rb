class RecipeSerializer < ActiveModel::Serializer
  attributes :id,:name,:img, :cook_time, :ingredients, :instructions

  has_many :reviews
end
