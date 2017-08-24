import React from "react";
import Feed from "./Feed";
import Sleep from "./Sleep";
import Play from "./Play";


function Controls(props){
  var controlsStyles = {
    display: "flex",
    justifyContent: "space-between",
    margin: "30px",
    fontFamily: "sans-serif"
  }

  return (
    <div>
      <div style={controlsStyles}>
        <Feed feedTama={props.feedTama}
        AddFeedTama={props.AddFeedTama}/>
        <Sleep sleepTama={props.sleepTama} />
        <Play playTama={props.playTama}/>
      </div>
    </div>
  );
}

export default Controls;
