import React, { Component } from 'react';
import Match from './Match';

class MatchCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.username !== null) {
    let matches;
      matches = this.props.userMatches.map(match => {

      let handleMatchSelect = () => {
        this.props.handleMatchSelect(match.matchId, match.champion.key);
        this.forceUpdate();
        };
      return(
        <Match
          id = {match.matchId}
          champion = {match.champion.name}
          championKey = {match.champion.key}
          queue = {match.queue}
          lane = {match.lane}
          season = {match.season}
          date = {match.timestamp}
          className = {match.matchId}
          key = {match.matchId}
          handleMatchSelect = {handleMatchSelect}
        />
      )
    })
    return(
      <ul className="match-list">
      {matches}</ul>
    )
  } else {
    return(
      <p>Please sign in to a LeagueHQ account with a valid Riot username to view your match history.</p>
    )
  }
}


}

export default MatchCollection;
