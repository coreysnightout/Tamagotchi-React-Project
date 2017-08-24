import React from "react";
import Controls from "./Controls";
import TamagotchiModel from '../models/Tamagotchi';


class Tamagotchi extends React.Component {

  constructor(props){
    super(props)
    this.feedTama = this.feedTama.bind(this);
    this.sleepTama = this.sleepTama.bind(this);
    this.playTama = this.playTama.bind(this);
    this.state = {
      clicked: false,
      tamagotchi: new TamagotchiModel(100, 100, 100)
    }
  }

  componentDidMount() {
    var test = setInterval(() =>
    this.hunger(),
    // this.AddFeedTama(),
    1000
    );
  }

  hunger() {
    this.state.tamagotchi.hungerLevel -= 10;
      var newState = this.state.tamagotchi;
      this.setState({Tamagotchi: newState});
      newState.hungerLevel = 100;
      // alert("start over breh");
    }
  }


  componentWillUnmount(){
    if (test < 100) {
    clearInterval(test)
  }
}

  feedTama() {
    var newState = this.state.tamagotchi;
    this.setState({Tamagotchi: newState});
    console.log(newState.hungerLevel += 10);
  }

  sleepTama() {
    console.log("sleep");
    var newState = this.state.tamagotchi;
    this.setState({Tamagotchi: newState});
    console.log(newState.tirednessLevel += 10);
  }

  playTama() {
    console.log("mask off");
  }


render () {

  var thongStyles = {
    width: "400px",
    height: "500px",
    backgroundColor: "coral",
    borderRadius: "200px",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    flexDirection: "column",
    border: "2px solid brown",
    letterSpacing: "2px"
  }

  //test

  var screenStyles = {
    marginTop: '20px',
    backgroundColor: 'ivory',
    height: '52%',
    width: '68%',
    display: 'flex',
    alignSelf: 'center',
    marginBottom: '50px',
    borderRadius: '10px',
    justifyContent: 'center'
  }


  var imgStyles = {
    width: "170px",
    height: "170px",
    display: "flex",
    alignSelf: "center"
  }


return (
  <div>
    <div style={thongStyles}>
      <h2>Thongarottee</h2>
      <div style={screenStyles}>
        <img style={imgStyles} src="http://vignette3.wikia.nocookie.net/tamagotchi/images/2/2b/Kuchipatchi_anime.PNG/revision/latest?cb=20110918052545"/>
      </div>
    </div>
    <Controls
      feedTama={this.feedTama}
      AddFeedTama={this.state.tamagotchi}
      sleepTama={this.sleepTama}
      playTama={this.playTama}/>
  </div>
);
  }
}

export default Tamagotchi;
