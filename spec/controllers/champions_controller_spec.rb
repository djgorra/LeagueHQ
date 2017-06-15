require "rails_helper"

RSpec.describe ChampionsController, :type => :controller do
  describe "GET show" do
    before do
      @champion = FactoryGirl.create(:champion)
      @version = FactoryGirl.create(:version)
      get :show, params: { id: @champion.id }
    end

    it "has a 200 status code" do
      expect(response).to have_http_status(:success)
    end
  end
end
