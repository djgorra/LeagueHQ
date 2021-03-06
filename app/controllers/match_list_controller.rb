class MatchListController < ApplicationController
  def show
    #Taking in Riot username as params and using it to retrieve Riot ID
    url1 = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/#{params[:id].tr(" ", "_")}?api_key=#{ENV["api-key"]}"
    response1 = HTTParty.get(url1)

    if response1["status"]
      render json: response1["status"]
    else
      
      #Takes recieved ID and uses it to retrieve match list
      url2 = "https://na.api.riotgames.com/api/lol/NA/v2.2/matchlist/by-summoner/#{response1["id"]}?endIndex=30&beginIndex=0&api_key=#{ENV["api-key"]}"
      response2 = HTTParty.get(url2)

      #Uses ruby goodness to make some attributes more human readable so I don't have to do it in javascript :^)
      response2["matches"].each do |match|
        @champion = Champion.find_by(riot_id: match["champion"])
        match["champion"] = {name: @champion.name, key: @champion.key}
        match["timestamp"] = Date.strptime((match["timestamp"] / 1000).to_s, '%s')
        match["queue"] = match["queue"].titleize.chomp(" 5x5").chomp("sr")
        match["season"] = match["season"].titleize
        match["lane"] = match["lane"].humanize
      end
      render json: response2["matches"]
    end
  end
end
