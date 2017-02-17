class CreateSkins < ActiveRecord::Migration[5.0]
  def change
    create_table :skins do |t|
      t.integer :num, null: false
      t.string :name, null: false
      t.belongs_to :champion, null: false
    end
  end
end
