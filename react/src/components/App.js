/* jshint esversion:6 */
import React, { Component } from 'react';
import ChampionCollection from './ChampionCollection';
import ChampionInfo from './ChampionInfo';
import { StickyContainer, Sticky } from 'react-sticky';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champions: [],
      selectedChampionInfo: null,
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

    $.ajax({
      url: `/champions/${id}/info`,
      contentType: 'application/json'
      })
      .done(data => {

          this.setState({
            selectedChampionInfo: data
          });
      });
  }

  render() {
    let showChampion;

    if (this.state.selectedChampionInfo !== null) {
      showChampion =
      <ChampionInfo
        id = {this.state.selectedChampionInfo.id}
        name = {this.state.selectedChampionInfo.name}
        keyy = {this.state.selectedChampionInfo.key}
        title = {this.state.selectedChampionInfo.title}
        lore = {this.state.selectedChampionInfo.lore}
        attack = {this.state.selectedChampionInfo.attack}
        defense = {this.state.selectedChampionInfo.defense}
        magic = {this.state.selectedChampionInfo.magic}
        skins = {this.state.selectedChampionInfo.skins}
        topics = {this.state.selectedChampionInfo.topics}
        abilities = {this.state.selectedChampionInfo.abilities}
        img = {this.state.selectedChampionInfo.image}
        />
    }

    return (
      <StickyContainer>
      <div className = "App row">

        <div className = "columns show-for-small-only small-12">
            {showChampion}
        </div>

        <div className = "column small-12 medium-6">
          <ul className = "champion-list">
            <ChampionCollection
              champions= {this.state.champions}
              selectedChampionId = {this.state.selectedChampionId}
              handleChampionSelect= {this.handleChampionSelect}
            />
          </ul>
        </div>
        <div className = "columns hide-for-small-only medium-6">
          <Sticky topOffset={0}>
              {showChampion}
          </Sticky>
        </div>
      </div>
      </StickyContainer>
    );
  }
}


export default App;
