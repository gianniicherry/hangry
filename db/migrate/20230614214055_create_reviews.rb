class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :difficulty
      t.string :description

      t.timestamps
    end
  end
end
