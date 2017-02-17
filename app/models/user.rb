class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  before_save :get_riot_info

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  validates :email, presence: true,
  format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i },
  uniqueness: { case_sensitive: false }
  validates :password, presence: true

  has_many :topics
  has_many :replies
  has_many :matches

  private
  def get_riot_info
    unless self.riot_username.nil?
      response = HTTParty.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/#{self.riot_username}?api_key=RGAPI-170add2c-df6d-4bb7-975c-5b970695a787")
        if response["status"].nil?
        id = response[self.riot_username.downcase]["id"]
        icon = response[self.riot_username.downcase]["profileIconId"]
        level = response[self.riot_username.downcase]["summonerLevel"]
        self.riot_id = id
        self.icon_id = icon
        self.level = level
      end
    end
  end
end
