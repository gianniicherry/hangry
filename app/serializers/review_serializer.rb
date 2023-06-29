class ReviewSerializer < ActiveModel::Serializer
  attributes :rating, :difficulty, :description

  belongs_to :recipe
  belongs_to :user
end
