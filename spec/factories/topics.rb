FactoryGirl.define do
  factory :topic do
    champion
    user
    title "Hello World"
    content "This is a test"
  end
end
