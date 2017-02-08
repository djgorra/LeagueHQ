class MatchesController < ApplicationController
  def new
    @user = User.find(params[:user_id])
    if @user.matches.exists?
      matches = Match.where(user_id: @user.id)
      matches.each do |match|
        match.players.destroy_all
        match.destroy
      end
    end
    
    url = "https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/#{@user.riot_id}?beginIndex=0&endIndex=4&api_key=RGAPI-170add2c-df6d-4bb7-975c-5b970695a787"
    response = HTTParty.get(url)

    response["matches"].each do |match|
      unless Match.exists?(match_id: match["matchId"].to_s)
        Match.create(user_id: params[:user_id], match_id: match["matchId"].to_s, champion_id: match["champion"], gamemode: match["queue"], lane: match["lane"], season: match["season"])
        url2 = "https://na.api.pvp.net/api/lol/na/v2.2/match/#{match["matchId"]}?api_key=RGAPI-170add2c-df6d-4bb7-975c-5b970695a787"
        response2 = HTTParty.get(url2)
        thismatch = Match.find_by(match_id: match["matchId"].to_s)
        champion = Champion.find_by(riot_id: thismatch.champion_id)
        date = (response2["matchCreation"]/1000).to_s
        duration = (response2["matchDuration"]/60).floor
        Match.find_by(match_id: match["matchId"].to_s).update_attributes(:date => Date.strptime(date, '%s'), :duration => "#{duration} minutes", :champion => champion.key)
        count = 0

        response2["participants"].each do |player|

          champerino = Champion.find_by(riot_id: player["championId"])
          Player.create(name: response2["participantIdentities"][count]["player"]["summonerName"], riot_id: response2["participantIdentities"][count]["player"]["summonerId"], icon_id: response2["participantIdentities"][count]["player"]["profileIcon"], champion_id: player["championId"], lane: player["timeline"]["lane"],
          team: player["teamId"], won: player["stats"]["winner"], kills: player["stats"]["kills"], deaths: player["stats"]["deaths"], assists: player["stats"]["assists"], tower_kills: player["stats"]["towerKills"], level: player["stats"]["champLevel"],
          first_blood: player["stats"]["firstTowerKill"], first_tower: player["stats"]["firstTowerKill"], gold_earned: player["stats"]["goldEarned"], damage_dealt: player["stats"]["totalDamageDealtToChampions"], damage_taken: player["stats"]["totalDamageTaken"],
          healing_done: player["stats"]["totalHeal"], minions_killed: player["stats"]["minionsKilled"], largest_multikill: player["stats"]["largestMultiKill"], wards_placed: player["stats"]["wardsPlaced"], item_0: player["stats"]["item0"], item_1:  player["stats"]["item1"],
          item_2: player["stats"]["item2"], item_3: player["stats"]["item3"], item_4: player["stats"]["item4"], item_5: player["stats"]["item5"], item_6: player["stats"]["item6"], match_id: thismatch.id, user_id: params[:user_id], champion: champerino.key )
          item_2: player["stats"]["item2"], item_3: player["stats"]["item3"], item_4: player["stats"]["item4"], item_5: player["stats"]["item5"], item_6: player["stats"]["item6"], match_id: thismatch.id, user_id: params[:user_id] )
          count += 1
        end

      end
    end
    redirect_to user_path(@user)
  end

  def show
    @user = User.find(params[:user_id])
    @match = Match.find(params[:id])
  end

end
