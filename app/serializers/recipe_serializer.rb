class RecipeSerializer < ActiveModel::Serializer
  attributes :id,:name,:img, :cook_time, :ingredients, :instructions
end
