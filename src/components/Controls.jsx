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
        <Feed />
        <Sleep />
        <Play />
      </div>
    </div>
  );
}

export default Controls;
