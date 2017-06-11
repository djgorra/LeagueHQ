class CreateVersions < ActiveRecord::Migration[5.0]
  def change
    create_table :versions do |t|
      t.string :num

      t.timestamps
    end
  end
end
