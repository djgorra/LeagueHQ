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
      username: null,
      userMatches: [],
      selectedMatchInfo: null,
      userMastery: [],
      version: null
    };
    this.handleChampionSelect = this.handleChampionSelect.bind(this);
    this.handleMatchSelect = this.handleMatchSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

    //Upon pageload gets list of champions and current username
    componentWillMount() {
      $.get("/champions/").done(data => {
            this.setState({
              champions: data.champions,
              version: data.version
            });
        });
      $.get("/current_user").done(data => {
            this.setState({
              username: data.username
            });
        });
      }

  //Alters state for every character entered into the React form
  handleChange(event) {
    this.setState({username: event.target.value});
  }

  //Uses the altered state to trigger a call to the LeagueHQ API with the entered name
  handleSubmit(event) {
    if (this.state.username !== undefined) {
    $.get(`/match_list/${this.state.username}`).done(data => {
      this.setState({
        userMatches: data
      });
    });
    }
    event.preventDefault();
  }

  //Uses a match's Riot-given ID to make a request to the LeagueHQ API
  //Sets the selectedMatchInfo state with the data returned and removes the selectedChampionInfo state to prevent overlap
  handleMatchSelect(id, key) {
    backgroundChanger(key);
    $.get(`/matches/${id}`).done(data => {
          this.setState({
            selectedChampionInfo: null,
            selectedMatchInfo: data
          });
        });
  }

  //Uses a champion's Riot-given ID to make a request to the LeagueHQ API
  //Sets the selectedChampionInfo state with the data returned and removes the selectedMatchInfo state to prevent overlap
  handleChampionSelect(id, key) {
    backgroundChanger(key);
    $.get(`/champions/${id}/info`).done(data => {
          this.setState({
            selectedMatchinfo: null,
            selectedChampionInfo: data
          });
        });
    }

  masterySelect() {
    if (this.state.username !== undefined) {
    $.get(`/mastery_list/${this.state.username}`).done(data => {
      this.setState({
        userMastery: data
      });
    });
  }
}

  render() {
    let showInfo;
    if (this.state.selectedChampionInfo !== null) {
      showInfo =
      <ChampionInfo
        version = {this.state.version}
        id = {this.state.selectedChampionInfo.champion.id}
        name = {this.state.selectedChampionInfo.champion.name}
        keyy = {this.state.selectedChampionInfo.champion.key}
        title = {this.state.selectedChampionInfo.champion.title}
        lore = {this.state.selectedChampionInfo.champion.lore}
        attack = {this.state.selectedChampionInfo.champion.attack}
        defense = {this.state.selectedChampionInfo.champion.defense}
        magic = {this.state.selectedChampionInfo.champion.magic}
        skins = {this.state.selectedChampionInfo.skins}
        topics = {this.state.selectedChampionInfo.topics}
        abilities = {this.state.selectedChampionInfo.abilities}
        img = {this.state.selectedChampionInfo.image}
        />
    } else if (this.state.selectedMatchInfo !== null) {
      showInfo =
      <MatchInfo
      data = {this.state.selectedMatchInfo}
      version = {this.state.version}
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
               <Tab className="tab">Champions</Tab>
               <Tab className="tab" onClick={this.handleSubmit}>Recent Games</Tab>
              </TabList>

              <TabPanel>
                <ChampionCollection
                  champions= {this.state.champions}
                  version= {this.state.version}
                  selectedChampionId = {this.state.selectedChampionId}
                  handleChampionSelect= {this.handleChampionSelect}
                />
              </TabPanel>

              <TabPanel>
                <MatchCollection
                  userMatches = {this.state.userMatches}
                  username = {this.state.username}
                  version= {this.state.version}
                  handleMatchSelect = {this.handleMatchSelect}
                  selectedMatchInfo = {this.selectedMatchInfo}
                  handleChange = {this.handleChange}
                  handleSubmit = {this.handleSubmit}
                  />
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
