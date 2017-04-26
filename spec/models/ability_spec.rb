require 'rails_helper'

RSpec.describe Ability, type: :model do

  it { should belong_to(:champion) }

  it { should have_valid(:name).when('Choncho Jomp') }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:description).when('Mid air MAMBO KILL') }
  it { should_not have_valid(:description).when(nil, "") }

  it { should have_valid(:image).when('Jomp.bmp') }
  it { should_not have_valid(:image).when(nil, "") }

end
