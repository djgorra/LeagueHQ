class Champion < ApplicationRecord
  validates :name, presence: true
  validates :riot_id, presence: true
  validates :title, presence: true
  validates :lore, presence: true

  has_many :topics
end
