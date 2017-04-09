class MatchListController < ApplicationController
  def show
    #Taking in Riot username as params and using it to retrieve Riot ID
      url1 = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/#{params[:id]}?api_key=#{ENV["api-key"]}"
      response1 = HTTParty.get(url1)

      #Takes recieved ID and uses it to retrieve match list
      url2 = "https://na.api.riotgames.com/api/lol/NA/v2.2/matchlist/by-summoner/#{response1["id"]}?endIndex=20&beginIndex=0&api_key=#{ENV["api-key"]}"
      response2 = HTTParty.get(url2)

      #Finds internally stored champion based on ID and updates champion key with it's name
      response2["matches"].each do |match|
        @champion = Champion.find_by(riot_id: match["champion"])
        match["champion"] = {name: @champion.name, key: @champion.key}
      end
      render json: response2["matches"]
  end
end
