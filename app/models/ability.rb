class Ability < ApplicationRecord
  belongs_to :champion

  validates :name, presence: true
  validates :description, presence: true
  validates :image, presence: true
end
