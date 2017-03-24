class InfoController < ApplicationController
  def index
    @champion = Champion.find(params[:champion_id])
    render json: @champion.as_json(:include => {:topics => {:include => :user}, :skins => {}, :abilities => {}})
  end
end
