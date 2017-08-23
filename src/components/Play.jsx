import React from "react";
import { Button } from "react-bootstrap";

function Play(props){

  var buttonStyles = {
    width: "100px"
  }

  return (
    <div>
      <Button block bsStyle="warning" bsSize="large" style={buttonStyles}>Play</Button>
    </div>
  );
}

export default Play;
