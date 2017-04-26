class DropItemTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :items
  end
end
