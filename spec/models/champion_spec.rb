require 'rails_helper'

describe Champion, type: :model do

  it {should have_many(:topics) }
  it {should have_many(:skins) }
  it {should have_many(:abilities)}

  it { should have_valid(:name).when('Wukong') }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:riot_id).when(62) }
  it { should_not have_valid(:riot_id).when(nil, "") }

  it { should have_valid(:key).when("MonkeyKing") }
  it { should_not have_valid(:key).when(nil, "") }

  it { should have_valid(:title).when("The Monkey King") }
  it { should_not have_valid(:title).when(nil, "") }

  it { should have_valid(:lore).when("He's a monkey and he whacks people with a giant stick") }
  it { should_not have_valid(:lore).when(nil, "") }
end
