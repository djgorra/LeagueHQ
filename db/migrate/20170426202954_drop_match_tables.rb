class DropMatchTables < ActiveRecord::Migration[5.0]
  def change
    drop_table :players
    drop_table :matches
    drop_table :models
  end
end
