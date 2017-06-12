class CreateTopics < ActiveRecord::Migration[5.0]
  def change
    create_table :topics do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.belongs_to :user
      t.belongs_to :champion, null: false
    end
  end
end
