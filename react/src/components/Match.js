import React, { Component } from 'react';

class Match extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <li className="match-container" onClick={this.props.handleMatchSelect}>
        <div className="media-object">

          <div className="media-object-section">
            <div className="thumbnail">
              <img height="75" width="75" src={"http://ddragon.leagueoflegends.com/cdn/7.5.1/img/champion/" + this.props.championKey + ".png"} />
            </div>
          </div>

          <div className="media-object-section main-section">
            <h6>{this.props.champion}</h6>
            <small>{this.props.lane}</small><br/>
            <small>{this.props.queue}</small><br/>
            <small>{this.props.season}</small><br/>
            <small>{this.props.date}</small><br/>
          </div>

        </div>
      </li>
    )
  }
};

export default Match;
