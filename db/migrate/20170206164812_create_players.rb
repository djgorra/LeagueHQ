class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :name, null: false
      t.integer :riot_id, null: false
      t.string :icon_id, null: false
      t.integer :champion_id, null: false
      t.string :lane, null: false
      t.integer :team, null: false
      t.boolean :won, null: false
      t.integer :kills, null: false
      t.integer :deaths, null: false
      t.integer :assists, null: false
      t.integer :tower_kills, null: false
      t.integer :level, null: false
      t.boolean :first_blood, null: false
      t.boolean :first_tower, null: false
      t.integer :gold_earned, null: false
      t.integer :damage_dealt, null: false
      t.integer :damage_taken, null: false
      t.integer :healing_done, null: false
      t.integer :minions_killed, null: false
      t.integer :largest_multikill, null: false
      t.integer :wards_placed, null: false
      t.integer :item_0
      t.integer :item_1
      t.integer :item_2
      t.integer :item_3
      t.integer :item_4
      t.integer :item_5
      t.integer :item_6
      t.belongs_to :match, null: false
      t.belongs_to :user
    end
  end
end
