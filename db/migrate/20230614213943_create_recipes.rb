class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :img
      t.integer :cook_time
      t.text :ingredients
      t.text :instructions

      t.timestamps
    end
  end
end
