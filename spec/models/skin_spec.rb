require 'rails_helper'

RSpec.describe Skin, type: :model do

  it { should belong_to(:champion) }

  it { should have_valid(:num).when(0) }
  it { should_not have_valid(:num).when(nil, "", "zero") }

  it { should have_valid(:name).when("Mememaster Darius") }
  it { should_not have_valid(:name).when(nil, "")}

end
