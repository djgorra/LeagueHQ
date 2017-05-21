import React, { Component } from 'react';
import Match from './Match';

class MatchCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // Waits until a username is entered to do anything
    if (this.props.username !== undefined) {

    // If the data retrieved is an error, returns the code/message
      if (this.props.userMatches.status_code) {
        return(
          <div className="error small-8">
            <h3>Error {this.props.userMatches.status_code}</h3>
            <p>{this.props.userMatches.message}</p>
            <img src="http://i.imgur.com/yejk9lX.jpg" />
          </div>
        )
      // Else iterates through each match and returns a list of them
      }else{
    let matches = this.props.userMatches.map(match => {

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
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" placeholder="Search Summoners" onChange={this.props.handleChange}/>
        </form>
        <ul className="match-list">
          {matches}
        </ul>
      </div>
    )
  }
  // If there is no username, returns nothing.
  } else {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" placeholder="Search Summoners" onChange={this.props.handleChange}/>
      </form>
    )
  }
}


}

export default MatchCollection;
