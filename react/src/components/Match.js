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
              <img height="75" width="75" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/champion/" + this.props.championKey + ".png"} />
            </div>
          </div>

          <div className="media-object-section main-section">
            <p className="match-info">{this.props.champion}<br/>
               {this.props.lane}<br/>
               {this.props.queue}<br/>
               {this.props.season}<br/>
               {this.props.date}<br/>
               </p>
          </div>

        </div>
      </li>
    )
  }
};

export default Match;
