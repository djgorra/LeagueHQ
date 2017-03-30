import React, { Component } from 'react';
import Match from './Match';

class MatchCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    let matches;
    if (this.props.currentUserId !== null) {
      matches = this.props.userMatches.map(match => {

      let handleMatchSelect = () => {
        this.props.handleMatchSelect(match.riot_id, match.champion);
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
        />
      )
    })
  }
    return(
      <ul className="match-list">{matches}</ul>
    )
  }


}

export default MatchCollection;
