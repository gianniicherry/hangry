class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :difficulty, :description, :user_id

  belongs_to :recipe
  belongs_to :user
end
