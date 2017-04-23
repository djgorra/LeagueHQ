class MatchesController < ApplicationController

  def show
    url = "https://na.api.pvp.net/api/lol/na/v2.2/match/#{params[:id]}?api_key=#{ENV["api-key"]}"
    response = HTTParty.get(url)
    @winners = []
    @losers = []

    #Iterates through each participant to modify them into a more usable format and sort them into two distinct teams
    response["participants"].each do |participant|
      @champion = Champion.find_by(riot_id: participant["championId"])
      participant["championId"] = {name: @champion.name, key: @champion.key}
      participant["participantId"] = response["participantIdentities"][participant["participantId"]-1]["player"]
      if participant["stats"]["winner"]
        @winners << participant
      else
        @losers << participant
      end
    end

    #Deletes these now redundant sections of the data structure
    response.delete("participants")
    response.delete("participantIdentities")

    render :json => {:data => response, :winners => @winners, :losers => @losers}
  end

end
