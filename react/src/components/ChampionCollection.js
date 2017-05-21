import React, { Component } from 'react';
import Champion from './Champion';

class ChampionCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
    this.updateSearch = this.updateSearch.bind(this);
  }

    updateSearch(event) {
      this.setState({search: event.target.value})
    }

    render() {
      let filteredChampions = this.props.champions.filter(
        (champion) => {
          return champion.name.toLowerCase().indexOf(this.state.search) !== -1;
        }
      )
      let champions = filteredChampions.map(champion => {

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
        <div>
          <form>
            <input type="text" className="text-input" onChange={this.updateSearch} placeholder="Search Champions"/>
          </form>
          <ul className="champion-list">{champions}</ul>
        </div>
      )
    }
  }

  export default ChampionCollection;
