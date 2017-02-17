import React, { Component } from 'react';
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

            <div className ="topicsContainer">
              <h5>Recent Topics:</h5>
              <ul>
              {topics}
              </ul>
              <a href={"/champions/" + this.props.id}>See All</a>
            </div>

            <div className ="abilitiesContainer">
              <h5>Abilities</h5>
              {abilities}
            </div>
            <div className ="loreContainer">
              <h5>Lore</h5>
              <td dangerouslySetInnerHTML={{__html: lore}} />
            </div>
            <div className="skinsContainer">
              <h5>Skins</h5>
              {skins}
            </div>
          </div>
      )
    }
  };

  export default ChampionInfo;
