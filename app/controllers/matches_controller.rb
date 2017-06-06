class MatchesController < ApplicationController

  def show
    url = "https://na.api.pvp.net/api/lol/na/v2.2/match/#{params[:id]}?api_key=#{ENV["api-key"]}"
    response = HTTParty.get(url)

    if response["status"]
      render json: response["status"]
    else
      @winners = []
      @losers = []

      #Iterates through each participant to modify them into a more usable format and sort them into two distinct teams
      response["participants"].each do |participant|
        @champion = Champion.find_by(riot_id: participant["championId"])
        case participant["spell1Id"]
        when 1 then participant["spell1Id"] = "SummonerBoost"
        when 3 then participant["spell1Id"] = "SummonerExhaust"
        when 4 then participant["spell1Id"] = "SummonerFlash"
        when 6 then participant["spell1Id"] = "SummonerHaste"
        when 7 then participant["spell1Id"] = "SummonerHeal"
        when 11 then participant["spell1Id"] = "SummonerSmite"
        when 12 then participant["spell1Id"] = "SummonerTeleport"
        when 13 then participant["spell1Id"] = "SummonerMana"
        when 14 then participant["spell1Id"] = "SummonerDot"
        when 21 then participant["spell1Id"] = "SummonerBarrier"
        when 30 then participant["spell1Id"] = "SummonerPoroRecall"
        when 31 then participant["spell1Id"] = "SummonerPoroThrow"
        when 32 then participant["spell1Id"] = "SummonerSnowball"
        when 33 then participant["spell1Id"] = "SummonerSiegeChampSelect1"
        when 34 then participant["spell1Id"] = "SummonerSiegeChampSelect2"
        end
        case participant["spell2Id"]
        when 1 then participant["spell2Id"] = "SummonerBoost"
        when 3 then participant["spell2Id"] = "SummonerExhaust"
        when 4 then participant["spell2Id"] = "SummonerFlash"
        when 6 then participant["spell2Id"] = "SummonerHaste"
        when 7 then participant["spell2Id"] = "SummonerHeal"
        when 11 then participant["spell2Id"] = "SummonerSmite"
        when 12 then participant["spell2Id"] = "SummonerTeleport"
        when 13 then participant["spell2Id"] = "SummonerMana"
        when 14 then participant["spell2Id"] = "SummonerDot"
        when 21 then participant["spell2Id"] = "SummonerBarrier"
        when 30 then participant["spell2Id"] = "SummonerPoroRecall"
        when 31 then participant["spell2Id"] = "SummonerPoroThrow"
        when 32 then participant["spell2Id"] = "SummonerSnowball"
        when 33 then participant["spell2Id"] = "SummonerSiegeChampSelect1"
        when 34 then participant["spell2Id"] = "SummonerSiegeChampSelect2"
        end
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

end
