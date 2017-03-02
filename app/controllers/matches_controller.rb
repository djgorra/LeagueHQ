class MatchesController < ApplicationController
  def new
    @user = User.find(params[:user_id])

    url = "https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/#{@user.riot_id}?beginIndex=0&endIndex=30&api_key=#{ENV["api-key"]}"
    response = HTTParty.get(url)

    response["matches"].each do |match|
      #Checks user's matches to see if the one being created exists. If not, creates it.
      unless @user.matches.where(match_id: match["matchId"].to_s).exists?
        Match.create(user_id: params[:user_id],
         match_id: match["matchId"].to_s,
         champion_id: match["champion"],

         champion: Champion.where(riot_id: match["champion"])[0].key,
         gamemode: match["queue"],
         lane: match["lane"],
         season: match["season"],
         date: Date.strptime((match["timestamp"]/1000).to_s, '%s'))
      end
    end
    redirect_to user_path(@user)
  end

  def show
    @user = User.find(params[:user_id])
    @match = Match.find(params[:id])

    url = "https://na.api.pvp.net/api/lol/na/v2.2/match/#{@match.match_id}?api_key=#{ENV["api-key"]}"
    response = HTTParty.get(url)
    date = (response["matchCreation"]/1000).to_s
    duration = (response["matchDuration"]/60).floor

    @match.update_attributes(:duration => "#{duration} minutes", :champion => @match.champion)
    count = 0

    response["participants"].each do |player|
      #Checks if this player in this match exists before creating, thus avoiding recreating every time the page is loaded
      unless Player.where(riot_id: response["participantIdentities"][count]["player"]["summonerId"], match_id: @match.id).exists?
        champerino = Champion.find_by(riot_id: player["championId"])
        Player.create(name: response["participantIdentities"][count]["player"]["summonerName"],
         riot_id: response["participantIdentities"][count]["player"]["summonerId"],
         icon_id: response["participantIdentities"][count]["player"]["profileIcon"],
         champion_id: player["championId"], lane: player["timeline"]["lane"],
         team: player["teamId"],
         won: player["stats"]["winner"],
         kills: player["stats"]["kills"],
         deaths: player["stats"]["deaths"],
         assists: player["stats"]["assists"],
         tower_kills: player["stats"]["towerKills"],
         level: player["stats"]["champLevel"],
         first_blood: player["stats"]["firstTowerKill"],
         first_tower: player["stats"]["firstTowerKill"],
         gold_earned: player["stats"]["goldEarned"],
         damage_dealt: player["stats"]["totalDamageDealtToChampions"],
         damage_taken: player["stats"]["totalDamageTaken"],
         healing_done: player["stats"]["totalHeal"],
         minions_killed: player["stats"]["minionsKilled"],
         largest_multikill: player["stats"]["largestMultiKill"],
         wards_placed: player["stats"]["wardsPlaced"],
         item_0: player["stats"]["item0"],
         item_1: player["stats"]["item1"],
         item_2: player["stats"]["item2"],
         item_3: player["stats"]["item3"],
         item_4: player["stats"]["item4"],
         item_5: player["stats"]["item5"],
         item_6: player["stats"]["item6"],
         match_id: @match.id,
         user_id: params[:user_id],
         champion: champerino.key)
        count += 1
      end
    end
    @winners = @match.players.where(won: true).order(:lane)
    @losers = @match.players.where(won: false).order(:lane)
  end

end
