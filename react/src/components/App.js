/* jshint esversion:6 */
import React, { Component } from 'react';
import ChampionCollection from './ChampionCollection';
import ChampionInfo from './ChampionInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champions: [],
      selectedChampionId: null
    };
    this.handleChampionSelect = this.handleChampionSelect.bind(this);

  }
    componentWillMount() {
      $.ajax({
        url: '/champions',
        contentType: 'application/json'
        })
        .done(data => {

            this.setState({
              champions: data
            });
        });
      }

  handleChampionSelect(id, key) {
    this.setState({
      selectedChampionId: id
    });
    backgroundChanger(key)
  }

  render() {
    let showChampion;

    if (this.state.selectedChampionId !== null) {
      showChampion =
      <ChampionInfo
        id = {this.state.champions[this.state.selectedChampionId-1].id}
        name = {this.state.champions[this.state.selectedChampionId-1].name}
        keyy = {this.state.champions[this.state.selectedChampionId-1].key}
        title = {this.state.champions[this.state.selectedChampionId-1].title}
        lore = {this.state.champions[this.state.selectedChampionId-1].lore}
        attack = {this.state.champions[this.state.selectedChampionId-1].attack}
        defense = {this.state.champions[this.state.selectedChampionId-1].defense}
        magic = {this.state.champions[this.state.selectedChampionId-1].magic}
        skins = {this.state.champions[this.state.selectedChampionId-1].skins}
        topics = {this.state.champions[this.state.selectedChampionId-1].topics}
        abilities = {this.state.champions[this.state.selectedChampionId-1].abilities}
        img = {this.state.champions[this.state.selectedChampionId-1].image}
        />
    }

    return (
      <div className = "App row">

        <div className = "columns show-for-small-only small-12 medium-6">
            {showChampion}
        </div>

        <div className = "column small-12 medium-6">
          <h1>Champions</h1>
          <ul className = "champion-list">
            <ChampionCollection
              champions= {this.state.champions}
              selectedChampionId = {this.state.selectedChampionId}
              handleChampionSelect= {this.handleChampionSelect}
            />
          </ul>
        </div>

        <div className = "columns show-for-medium-up small-12 medium-6">
            {showChampion}
        </div>
      </div>
    );
  }
}


export default App;
