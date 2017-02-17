class CreateReplies < ActiveRecord::Migration[5.0]
  def change
    create_table :replies do |t|
      t.text :content, null: false
      t.belongs_to :user, null: false
      t.belongs_to :topic, null: false
    end
  end
end
