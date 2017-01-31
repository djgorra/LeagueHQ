class ChampionsController < ApplicationController

  def index
    @champions = Champion.order("name").all
  end

  def show
    @champion = Champion.find(params[:id])
    @topics = @champion.topics
  end

end
