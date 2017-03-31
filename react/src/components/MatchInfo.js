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
      return <li key={player.id}>
        <div className="media-object" style={divStyle}>

          <div className="media-object-section">
            <div className="thumbnail">
              <img height="50" width="50" src={"http://ddragon.leagueoflegends.com/cdn/7.6.1/img/profileicon/" + player.icon_id + ".png"} />
            </div>
          </div>

          <div className="media-object-section">
            <h5>{player.name}</h5>
            <h5>{player.kills}/{player.deaths}/{player.assists}</h5>
          </div>
        </div>
      </li>;
    })
    let losers = this.props.losers.map(function(player){
      let divStyle = {
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${player.champion}_0.jpg)`,
        backgroundSize: 'cover'
      }
      return <li key={player.id}>
        <div className="media-object" style={divStyle}>

          <div className="media-object-section">
            <div className="thumbnail">
              <img height="50" width="50" src={"http://ddragon.leagueoflegends.com/cdn/7.6.1/img/profileicon/" + player.icon_id + ".png"} />
            </div>
          </div>

          <div className="media-object-section">
            <h5>{player.name}</h5>
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
