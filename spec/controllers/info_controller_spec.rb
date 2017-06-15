require "rails_helper"

RSpec.describe InfoController, :type => :controller do
  describe "GET index" do
    before do
      @champion = FactoryGirl.create(:champion)
      get :index, params: { champion_id: @champion.id }
    end

    it "has 200 response code" do
      expect(response).to have_http_status(:success)
    end

    it "returns champion info as JSON" do
      expect(response.body).to include @champion.name
      expect(response.body).to include @champion.title
      expect(response.body).to include @champion.key
      expect(response.body).to include @champion.lore
      expect(response.body).to include @champion.img
    end
  end
end
