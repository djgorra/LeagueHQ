import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class ChampionInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let lore = this.props.lore
    let keyy = this.props.keyy;
    let skins = this.props.skins.map(function(skin){
      return <li key={skin.num}>  {skin.name}<img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + keyy + "_" + skin.num + ".jpg"}/></li>;
    })

    let abilities = this.props.abilities.map(function(ability){
      return <li key={ability.id}><img src={"http://ddragon.leagueoflegends.com/cdn/7.2.1/img/spell/" + ability.image}/>{ability.name}<br/><small>{ability.description}</small></li>;

    })

    let topics = this.props.topics.slice(0, 10).map(function(topic){
      return <li key={topic.id}><a href={"/champions/" + topic.champion_id + "/topics/" + topic.id}>{topic.title}</a></li>

    })


    return(
          <div className="callout">
            <h1>{this.props.name}</h1>
            <h5>{this.props.title}</h5>
            <Tabs>
              <TabList>
                <Tab>Recent Topics</Tab>
                <Tab>Abilities</Tab>
                <Tab>Lore</Tab>
                <Tab>Skins</Tab>
              </TabList>
              <TabPanel>
                <div className ="topicsContainer">
                  <ul>
                  {topics}
                  </ul>
                  <a href={"/champions/" + this.props.id}>See All</a>
                </div>
              </TabPanel>

              <TabPanel>
                <div className ="abilitiesContainer">
                  {abilities}
                </div>
              </TabPanel>

              <TabPanel>
                <div className ="loreContainer">
                  <p dangerouslySetInnerHTML={{__html: lore}} />
                </div>
              </TabPanel>

              <TabPanel>
                <div className="skinsContainer">
                  {skins}
                </div>
              </TabPanel>
            </Tabs>
          </div>
      )
    }
  };

  export default ChampionInfo;
