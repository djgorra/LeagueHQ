FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "#{n}email@website.com" }
    sequence(:password) { |n| "#{n}password" }
    riot_username "Bearrorist"
    riot_id 44600391
    icon_id 588
    level 30
    is_admin false
  end
end
