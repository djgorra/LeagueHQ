class CreateChampions < ActiveRecord::Migration[5.0]
  def change
    create_table :champions do |t|
      t.string :name, null: false
      t.string :key, null: false
      t.integer :riot_id, null: false
      t.string :title, null: false
      t.text :lore, null: false
      t.string :img, null: false
    end
  end
end
