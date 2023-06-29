class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :difficulty
      t.string :description
      t.integer :recipe_id
      t.integer :user_id

      t.timestamps
    end
  end
end
