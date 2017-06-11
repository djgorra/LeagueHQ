import React, { Component } from 'react';

class MatchInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    if (this.props.data.status_code){
      return (
        <div className="error small-8">
          <h3>Error {this.props.data.status_code}</h3>
          <p>{this.props.data.message}</p>
          <img src="http://i.imgur.com/yejk9lX.jpg" />
        </div>
      )
    }else{
    let winners = this.props.data.winners.map((player) => {

      //Replaces items that are 0 with the number for the empty item slot.
      //Not sure why the empty item slot couldn't just be 0. Thanks Riot.
      for (var i = 0; i < 7; i++) {
        if (player.stats[`item${i}`] == 0) {
          player.stats[`item${i}`] = 3637
        }
      }

      let divStyle = {
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${player.championId.key}_0.jpg)`,
        backgroundSize: 'cover'
      }

      return <li key={player.participantId.summonerId} className="winners">
        <div className="media-object" style={divStyle}>

          <div className="media-object-section small-4">
            <img height="50" width="50" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/profileicon/" + player.participantId.profileIcon + ".png"} />
            <img className="summonerSpell" height="30" width="30" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/spell/" + player.spell1Id + ".png"} />
            <img className="summonerSpell" height="30" width="30" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/spell/" + player.spell2Id + ".png"} />
            <h5>{player.participantId.summonerName}</h5>
            <p>{player.stats.kills}/{player.stats.deaths}/{player.stats.assists}</p>
            <p>Level {player.stats.champLevel}</p>
            <p>Minions killed: {player.stats.minionsKilled}</p>
          </div>

          <div className="media-object-section small-5">
            <ul className="item-list">
              <li><img height="25" width="25" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/item/" + player.stats.item0 + ".png"} /></li>
              <li><img height="25" width="25" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/item/" + player.stats.item1 + ".png"} /></li>
              <li><img height="25" width="25" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/item/" + player.stats.item2 + ".png"} /></li>
              <li><img height="25" width="25" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/item/" + player.stats.item3 + ".png"} /></li>
              <li><img height="25" width="25" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/item/" + player.stats.item4 + ".png"} /></li>
              <li><img height="25" width="25" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/item/" + player.stats.item5 + ".png"} /></li>
              <li><img height="25" width="25" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/item/" + player.stats.item6 + ".png"} /></li>
            </ul><br/>
            <p>Towers destroyed: {player.stats.towerKills}</p>
            <p>Best multikill: {player.stats.largestMultiKill}</p>
            <p>Wards placed: {player.stats.wardsPlaced}</p>
          </div>

          <div className="media-object-section small-3">
            <p>Damage dealt: {player.stats.totalDamageDealt}</p>
            <p>Damage taken: {player.stats.totalDamageTaken}</p>
            <p>Healing done: {player.stats.totalHeal}</p>
          </div>
        </div>
      </li>;
    })

    let losers = this.props.data.losers.map((player) => {


      //Replaces items that are 0 with the number for the empty item slot.
      for (var i = 0; i < 7; i++) {
        if (player.stats[`item${i}`] === 0) {
          player.stats[`item${i}`] = 3637;
        }
      }

      let divStyle = {
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${player.championId.key}_0.jpg)`,
        backgroundSize: 'cover'
      }

      return <li key={player.participantId.summonerId} className="winners">
        <div className="media-object" style={divStyle}>

          <div className="media-object-section small-4">
          <img height="50" width="50" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/profileicon/" + player.participantId.profileIcon + ".png"} />
          <img className="summonerSpell" height="30" width="30" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/spell/" + player.spell1Id + ".png"} />
          <img className="summonerSpell" height="30" width="30" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/spell/" + player.spell2Id + ".png"} />
            <h5>{player.participantId.summonerName}</h5>
            <p>{player.stats.kills}/{player.stats.deaths}/{player.stats.assists}</p>
            <p>Level {player.stats.champLevel}</p>
            <p>Minions killed: {player.stats.minionsKilled}</p>
          </div>

          <div className="media-object-section small-5">
            <ul className="item-list">
            <li><img height="25" width="25" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/item/" + player.stats.item0 + ".png"} /></li>
            <li><img height="25" width="25" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/item/" + player.stats.item1 + ".png"} /></li>
            <li><img height="25" width="25" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/item/" + player.stats.item2 + ".png"} /></li>
            <li><img height="25" width="25" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/item/" + player.stats.item3 + ".png"} /></li>
            <li><img height="25" width="25" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/item/" + player.stats.item4 + ".png"} /></li>
            <li><img height="25" width="25" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/item/" + player.stats.item5 + ".png"} /></li>
            <li><img height="25" width="25" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/item/" + player.stats.item6 + ".png"} /></li>
            </ul><br/>
            <p>Towers destroyed: {player.stats.towerKills}</p>
            <p>Best multikill: {player.stats.largestMultiKill}</p>
            <p>Wards placed: {player.stats.wardsPlaced}</p>
          </div>

          <div className="media-object-section small-3">
            <p>Damage dealt: {player.stats.totalDamageDealt}</p>
            <p>Damage taken: {player.stats.totalDamageTaken}</p>
            <p>Healing done: {player.stats.totalHeal}</p>
          </div>
        </div>
      </li>;
    })

    return (
      <div className="callout">
        <ul>
          <h3>VICTORY</h3>
          {winners}
          <h3>DEFEAT</h3>
          {losers}
        </ul>
      </div>
    );
  }
  }
}
export default MatchInfo;
