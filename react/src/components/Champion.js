import React, { Component } from 'react';

class Champion extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <li className= "icon-container" onClick={this.props.handleChampionSelect}>
        <img height="50" width="50" src={"http://ddragon.leagueoflegends.com/cdn/7.1.1/img/champion/" + this.props.img} />
        &nbsp;{this.props.className}
      </li>
    )
  }
};

export default Champion;
