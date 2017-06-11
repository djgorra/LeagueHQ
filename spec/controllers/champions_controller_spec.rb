require "rails_helper"

RSpec.describe ChampionsController, :type => :controller do
  describe "GET show" do
    it "has a 200 status code" do
      FactoryGirl.create(:champion)
      get :show, id: 1
      expect(response.status).to eq(200)
    end
  end
end
