import React from "react";
import { Button } from "react-bootstrap";

function Sleep(props){

  var buttonStyles = {
    width: "100px"
  }

  return (

    <div>
      <Button block bsStyle="warning" bsSize="large" style={buttonStyles}>Sleep</Button>
    </div>
  );
}

export default Sleep;
