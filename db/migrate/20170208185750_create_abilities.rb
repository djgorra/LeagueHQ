class CreateAbilities < ActiveRecord::Migration[5.0]
  def change
    create_table :abilities do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :image, null: false
      t.belongs_to :champion, null: false
    end
  end
end
