import React, { Component } from 'react';

class Champion extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <li className= "icon-wrapper" onClick={this.props.handleChampionSelect}>
        <div className="icon-inner">
          <img height="50" width="50" src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/champion/" + this.props.img} />
          &nbsp;{this.props.className}
        </div>
      </li>
    )
  }
};

export default Champion;
