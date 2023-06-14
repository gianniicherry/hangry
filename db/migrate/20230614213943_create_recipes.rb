class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :cook_time
      t.string :ingredients
      t.string :instructions

      t.timestamps
    end
  end
end
