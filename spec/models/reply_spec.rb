require 'rails_helper'

RSpec.describe Reply, type: :model do

  it { should belong_to(:topic) }

  it { should have_valid(:content).when('literally unplayable') }
  it { should_not have_valid(:content).when(nil, "") }

end
