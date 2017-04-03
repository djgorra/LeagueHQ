/* jshint esversion:6 */
import React, { Component } from 'react';
import ChampionCollection from './ChampionCollection';
import ChampionInfo from './ChampionInfo';
import MatchCollection from './MatchCollection';
import MatchInfo from './MatchInfo';
import { StickyContainer, Sticky } from 'react-sticky';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champions: [],
      selectedChampionInfo: null,
      currentUserId: null,
      currentUserRiotId: null,
      userMatches: [],
      selectedMatchInfo: null
    };
    this.handleChampionSelect = this.handleChampionSelect.bind(this);
    this.handleMatchSelect = this.handleMatchSelect.bind(this);
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

  handleMatchSelect(id, key) {
    backgroundChanger(key)
    $.get(`/users/${this.state.currentUserId}/matches/${id}`).done(data => {
          this.setState({
            selectedChampionInfo: null,
            selectedMatchInfo: data
          });
        });
  }

  handleChampionSelect(id, key) {
    backgroundChanger(key)
    $.get(`/champions/${id}/info`).done(data => {
          this.setState({
            selectedMatchinfo: null,
            selectedChampionInfo: data
          });
        });
    }

    addDefaultSrc(ev){
      ev.src = 'http://ddragon.leagueoflegends.com/cdn/7.6.1/img/item/3637.png'
    }

  render() {
    let showInfo;
    if (this.state.selectedChampionInfo !== null) {
      showInfo =
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
    } else if (this.state.selectedMatchInfo !== null) {
      showInfo =
      <MatchInfo
      winners = {this.state.selectedMatchInfo.winners}
      losers = {this.state.selectedMatchInfo.losers}
      addDefaultSrc = {this.addDefaultSrc}
      />
    }

    return (
      <StickyContainer>
        <div className = "App row">

          <div className = "columns show-for-small-only small-12">
              {showInfo}
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
                  handleMatchSelect = {this.handleMatchSelect}
                  />
              </TabPanel>
              <TabPanel>
              <h1>Current game will go here</h1>
              </TabPanel>
            </Tabs>
          </div>
          <div className = "columns hide-for-small-only medium-6">
            <Sticky topOffset={0}>
                {showInfo}
            </Sticky>
          </div>
        </div>
      </StickyContainer>
    );
  }
}


export default App;
