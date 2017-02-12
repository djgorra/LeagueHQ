class ChampionSerializer < ActiveModel::Serializer
  attributes :id, :name, :key, :riot_id, :title, :lore, :img, :attack, :defense, :magic, :difficulty

  has_many :topics
  has_many :skins
  has_many :abilities
end
