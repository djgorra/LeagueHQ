require 'rails_helper'

RSpec.describe Topic, type: :model do

  it { should belong_to(:champion) }
  it { should have_many(:replies) }

  it { should have_valid(:title).when('INSANE LEE SIN PLAY!!!!!!11!!!') }
  it { should_not have_valid(:title).when(nil, "") }

  it { should have_valid(:content).when('literally unplayable') }
  it { should_not have_valid(:content).when(nil, "") }


end
