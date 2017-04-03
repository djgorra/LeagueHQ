class ChangePlayerItems < ActiveRecord::Migration[5.0]
  def change
    change_column(:players, :item_0, :string)
    change_column(:players, :item_1, :string)
    change_column(:players, :item_2, :string)
    change_column(:players, :item_3, :string)
    change_column(:players, :item_4, :string)
    change_column(:players, :item_5, :string)
    change_column(:players, :item_6, :string)
  end
end
