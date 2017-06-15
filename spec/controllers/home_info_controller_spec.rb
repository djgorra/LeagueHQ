require 'rails_helper'

RSpec.describe HomeInfoController, type: :controller do
  describe "GET index" do
    it "has a 200 status code" do
      expect(response).to have_http_status(:success)
    end
  end
end
