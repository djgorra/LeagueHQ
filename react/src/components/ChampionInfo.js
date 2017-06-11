import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Img from 'react-image'

class ChampionInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let loader = <img src={"http://i.imgur.com/QwCBl6I.gif"}/>
    let lore = this.props.lore
    let keyy = this.props.keyy;
    let skins = this.props.skins.map((skin) => {
      return <li className="skinContainer" key={skin.num}><h2 className="skinName">{skin.name}</h2>
      <Img className="skinImage" src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + keyy + "_" + skin.num + ".jpg"} loader={loader}/></li>;
    })

    let abilities = this.props.abilities.map((ability) => {
      return <li key={ability.id}><Img src={"http://ddragon.leagueoflegends.com/cdn/" + this.props.version + "/img/spell/" + ability.image} loader={loader}/>  {ability.name}<br/><small>{ability.description}</small></li>;

    })

    let topics = this.props.topics.map((topic) => {
      if(topic.user.riot_username == ""){
        return <li key={topic.id} className="indexTopic"><a href={"/champions/" + topic.champion_id + "/topics/" + topic.id}>{topic.title}</a>
        <br/>Submitted on {topic.created_at}
        <br/>By <a href={"/users/" + topic.user_id}>{topic.user.email}</a></li>
      }else{
        return <li key={topic.id} className="indexTopic"><a href={"/champions/" + topic.champion_id + "/topics/" + topic.id}>{topic.title}</a>
        <br/>Submitted on {topic.created_at}
        <br/>By <a href={"/users/" + topic.user_id}>{topic.user.riot_username}</a></li>
      }
    })


    return(
          <div className="callout">
            <h1>{this.props.name}</h1>
            <h5>{this.props.title}</h5>
            <Tabs>
              <TabList>
                <Tab className="tab">Recent Topics</Tab>
                <Tab className="tab">Abilities</Tab>
                <Tab className="tab">Lore</Tab>
                <Tab className="tab">Skins</Tab>
              </TabList>
              <TabPanel>
                <div className ="infoContainer">
                  <ul className ="topicList">
                  {topics}
                  </ul>
                  <a href={"/champions/" + this.props.id}>See All</a>
                </div>
              </TabPanel>

              <TabPanel>
                <div className ="infoContainer">
                  {abilities}
                </div>
              </TabPanel>

              <TabPanel>
                <div className ="infoContainer">
                  <p dangerouslySetInnerHTML={{__html: lore}} />
                </div>
              </TabPanel>

              <TabPanel>
                <div className="infoContainer">
                  {skins}
                </div>
              </TabPanel>
            </Tabs>
          </div>
      )
    }
  };

  export default ChampionInfo;
