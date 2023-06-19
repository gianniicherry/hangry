class ReviewSerializer < ActiveModel::Serializer
  attributes :difficulty, :description

  belongs_to :recipe
end
