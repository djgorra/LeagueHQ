import React, { Component } from 'react';
import Match from './Match';

class MatchCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    if (this.props.currentUserId !== null) {
    let matches;
      matches = this.props.userMatches.map(match => {

      let handleMatchSelect = () => {
        this.props.handleMatchSelect(match.id, match.champion);
        this.forceUpdate();
        };
      return(
        <Match
          id = {match.id}
          champion = {match.champion}
          gamemode = {match.gamemode}
          lane = {match.lane}
          season = {match.season}
          date = {match.date}
          className = {match.riot_id}
          key = {match.id}
          handleMatchSelect = {handleMatchSelect}
          currentUserId = {this.props.currentUserId}
        />
      )
    })
    return(
      <ul className="match-list">{matches}</ul>
    )
  } else {
    return(
      <p>Please sign in to a LeagueHQ account with a valid Riot username to view your match history.</p>
    )
  }
}


}

export default MatchCollection;
