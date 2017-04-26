class Skin < ApplicationRecord
  belongs_to :champion

  validates :num, presence: true, numericality: true
  validates :name, presence: true
end
