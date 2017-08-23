import React from "react";
import Tamagotchi from "./Tamagotchi";

function App(props){
  var mainCenterStyles = {
    display: "flex",
    justifyContent: "center"
  }

  return (
    <div style={mainCenterStyles}>
      <Tamagotchi />
    </div>
  );
}

export default App;
