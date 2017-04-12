import React, { Component } from 'react';

class MatchInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    let participants = this.props.data.participants.map(function(player){

      let divStyle = {
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${player.championId.key}_0.jpg)`,
        backgroundSize: 'cover'
      }

      return <li key={player.participantId.summonerId} className="winners">
        <div className="media-object" style={divStyle}>

          <div className="media-object-section small-4">
          <img height="50" width="50" src={"http://ddragon.leagueoflegends.com/cdn/7.6.1/img/profileicon/" + player.participantId.profileIcon + ".png"} />
            <h5>{player.participantId.summonerName}</h5>
            <p>{player.stats.kills}/{player.stats.deaths}/{player.stats.assists}</p>
            <p>Level {player.stats.champLevel}</p>
            <p>Minions killed: {player.stats.minionsKilled}</p>
          </div>

          <div className="media-object-section small-5">
            <ul className="item-list">
              <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.stats.item0}.png`} /></li>
              <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.stats.item1}.png`} /></li>
              <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.stats.item2}.png`} /></li>
              <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.stats.item3}.png`} /></li>
              <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.stats.item4}.png`} /></li>
              <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.stats.item5}.png`} /></li>
              <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.stats.item6}.png`} /></li>
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
          {participants}
        </ul>
      </div>
    );
  }
}
export default MatchInfo;
