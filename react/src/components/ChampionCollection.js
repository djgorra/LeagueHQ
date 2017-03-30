import React, { Component } from 'react';
import Champion from './Champion';

class ChampionCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

    render() {
      let champions = this.props.champions.map(champion => {

        let handleChampionSelect = () => {
          this.props.handleChampionSelect(champion.id, champion.key);
          this.forceUpdate();
          };
        return(
          <Champion
            id = {champion.id}
            name = {champion.name}
            key = {champion.key}
            img = {champion.img}

            className = {champion.name}
            handleChampionSelect = {handleChampionSelect}

          />
        )
      })
      return(
        <ul>{champions}</ul>
      )
    }
  }

  export default ChampionCollection;
