class MatchesController < ApplicationController

  def show
    url = "https://na.api.pvp.net/api/lol/na/v2.2/match/#{params[:id]}?api_key=#{ENV["api-key"]}"
    response = HTTParty.get(url)


    response["participants"].each do |participant|
      @champion = Champion.find_by(riot_id: participant["championId"])
      participant["championId"] = {name: @champion.name, key: @champion.key}
      participant["participantId"] = response["participantIdentities"][participant["participantId"]-1]["player"]
    end

    render json: response
  end

end
