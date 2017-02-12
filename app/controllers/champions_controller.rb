class ChampionsController < ApplicationController

  def index
    @champions = Champion.order("id").all
    render json: @champions.as_json(:include => {:topics => {}, :skins => {}, :abilities => {}})
  end

  def show
    @champion = Champion.find(params[:id])
    @topics = @champion.topics
  end

end
