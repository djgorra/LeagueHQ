class ChampionsController < ApplicationController

  def index
    @champions = Champion.order("id").all
    render :json => {:champions => @champions.as_json(only: [:id, :name, :img, :key, :riot_id]), :version => Version.first.num}
  end

  def show
    @champion = Champion.find(params[:id])
    @topics = @champion.topics
    @version = Version.first.num
  end

end
