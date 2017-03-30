/* jshint esversion:6 */
import React, { Component } from 'react';
import ChampionCollection from './ChampionCollection';
import ChampionInfo from './ChampionInfo';
import MatchCollection from './MatchCollection';
import { StickyContainer, Sticky } from 'react-sticky';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champions: [],
      selectedChampionInfo: null,
      selectedChampionId: null,
      currentUserId: null,
      currentUserRiotId: null,
      userMatches: null
    };
    this.handleChampionSelect = this.handleChampionSelect.bind(this);
    this.recentGamesSelect = this.recentGamesSelect.bind(this);
    this.currentGameSelect = this.currentGameSelect.bind(this);

  }
    componentWillMount() {
      $.get("/champions/").done(data => {
            this.setState({
              champions: data
            });
        });
      $.get("/current_user").done(data => {
            this.setState({
              currentUserId: data["id"],
              currentUserRiotId: data["riot_id"]
            });
        });
      }

  recentGamesSelect() {
    $.get(`/users/${this.state.currentUserId}/matches/new`).done(data => {
          this.setState({
            userMatches: data
          });
      });
  }

  currentGameSelect() {
    console.log(this.state);
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
            <Tabs>
              <TabList>
               <Tab>Champions</Tab>
               <Tab onClick={this.recentGamesSelect}>Recent Games</Tab>
               <Tab onClick={this.currentGameSelect}>Current Game</Tab>
              </TabList>
              <TabPanel>
              <ul className = "champion-list">
                <ChampionCollection
                  champions= {this.state.champions}
                  selectedChampionId = {this.state.selectedChampionId}
                  handleChampionSelect= {this.handleChampionSelect}
                />
              </ul>
              </TabPanel>
              <TabPanel>
                <MatchCollection
                  userMatches = {this.state.userMatches}
                  currentUserId = {this.state.currentUserId}
                  />
              </TabPanel>
              <TabPanel>
              <h1>Current game will go here</h1>
              </TabPanel>
            </Tabs>
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
