import React, { Component } from 'react';

class MatchInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render(){

    let winners = this.props.winners.map(function(player){

      let divStyle = {
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${player.champion}_0.jpg)`,
        backgroundSize: 'cover'
      }

      return <li key={player.id} className="winners">
        <div className="media-object" style={divStyle}>

          <div className="media-object-section small-4">
          <img height="50" width="50" src={"http://ddragon.leagueoflegends.com/cdn/7.6.1/img/profileicon/" + player.icon_id + ".png"} />
            <h5>{player.name}</h5>
            <p>{player.kills}/{player.deaths}/{player.assists}</p>
            <p>Level {player.level}</p>
            <p>Minions killed: {player.minions_killed}</p>
          </div>

          <div className="media-object-section small-5">
            <ul className="item-list">
              <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.item_0}.png`} /></li>
              <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.item_1}.png`} /></li>
              <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.item_2}.png`} /></li>
              <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.item_3}.png`} /></li>
              <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.item_4}.png`} /></li>
              <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.item_5}.png`} /></li>
              <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.item_6}.png`} /></li>
            </ul><br/>
            <p>Towers destroyed: {player.tower_kills}</p>
            <p>Best multikill: {player.largest_multikill}</p>
            <p>Wards placed: {player.wards_placed}</p>
          </div>

          <div className="media-object-section small-3">
            <p>Damage dealt: {player.damage_dealt}</p>
            <p>Damage taken: {player.damage_taken}</p>
            <p>Healing done: {player.healing_done}</p>
          </div>
        </div>
      </li>;
    })
    let losers = this.props.losers.map(function(player){

            let divStyle = {
              backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${player.champion}_0.jpg)`,
              backgroundSize: 'cover'
            }

            return <li key={player.id} className="winners">
              <div className="media-object" style={divStyle}>

                <div className="media-object-section small-4">
                <img height="50" width="50" src={"http://ddragon.leagueoflegends.com/cdn/7.6.1/img/profileicon/" + player.icon_id + ".png"} />
                  <h5>{player.name}</h5>
                  <p>{player.kills}/{player.deaths}/{player.assists}</p>
                  <p>Level {player.level}</p>
                  <p>Minions killed: {player.minions_killed}</p>
                </div>

                <div className="media-object-section small-5">
                  <ul className="item-list">
                    <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.item_0}.png`} /></li>
                    <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.item_1}.png`} /></li>
                    <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.item_2}.png`} /></li>
                    <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.item_3}.png`} /></li>
                    <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.item_4}.png`} /></li>
                    <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.item_5}.png`} /></li>
                    <li><img height="25" width="25" src={`http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/${player.item_6}.png`} /></li>
                  </ul><br/>
                  <p>Towers destroyed: {player.tower_kills}</p>
                  <p>Best multikill: {player.largest_multikill}</p>
                  <p>Wards placed: {player.wards_placed}</p>
                </div>

                <div className="media-object-section small-3">
                  <p>Damage dealt: {player.damage_dealt}</p>
                  <p>Damage taken: {player.damage_taken}</p>
                  <p>Healing done: {player.healing_done}</p>
                </div>
              </div>
            </li>;
    })

    return (
      <div className="callout">
        <ul>
          <h3>VICTORY</h3>
          {winners}
        </ul>
        <ul>
          <h3>DEFEAT</h3>
          {losers}
        </ul>
      </div>
    );
  }
}
export default MatchInfo;
