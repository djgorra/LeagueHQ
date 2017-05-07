class InfoController < ApplicationController
  def index
    @champion = Champion.find(params[:champion_id])
    @topics = @champion.topics.last(10)
    @skins = @champion.skins
    @abilities = @champion.abilities
    render :json => {:champion => @champion.as_json, :topics => @topics.as_json(:include => :user), :skins => @skins.as_json, :abilities => @abilities.as_json}
  end
end
