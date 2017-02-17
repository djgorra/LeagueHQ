class CreateMatches < ActiveRecord::Migration[5.0]
  def change
    create_table :matches do |t|
      t.string :match_id, null: false
      t.integer :champion_id, null: false
      t.string :champion
      t.string :gamemode, null: false
      t.string :lane, null: false
      t.string :season, null: false
      t.string :date
      t.string :duration
      t.belongs_to :user
    end
  end
end
