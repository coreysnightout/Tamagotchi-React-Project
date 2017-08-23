import React from "react";
import Controls from "./Controls";

function Tamagotchi(props){

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
      <Controls />
    </div>
  );
}

export default Tamagotchi;
