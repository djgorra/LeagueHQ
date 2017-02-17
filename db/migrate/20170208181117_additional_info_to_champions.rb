class AdditionalInfoToChampions < ActiveRecord::Migration[5.0]
  def change
    add_column :champions, :attack, :integer
    add_column :champions, :defense, :integer
    add_column :champions, :magic, :integer
    add_column :champions, :difficulty, :integer
  end
end
