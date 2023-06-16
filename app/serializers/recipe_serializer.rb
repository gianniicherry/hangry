class RecipeSerializer < ActiveModel::Serializer
  attributes :name, :cook_time, :ingredients, :instructions
end
