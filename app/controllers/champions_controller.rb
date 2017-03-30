class ChampionsController < ApplicationController

  def index
    @champions = Champion.order("id").all
    render json: @champions.as_json(only: [:id, :name, :img, :key, :riot_id])
  end

  def show
    @champion = Champion.find(params[:id])
    @topics = @champion.topics
  end

end
