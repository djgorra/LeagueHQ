class AddingRiotIdToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column(:users, :riot_username, :string)
    add_column(:users, :riot_id, :integer)
    add_column(:users, :icon_id, :integer)
    add_column(:users, :level, :integer)
  end
end
