class ChampionsController < ApplicationController
  def show
    @champion = Champion.find(params[:id])
    @topics = @champion.topics
    @version = Version.first.num
  end
end
