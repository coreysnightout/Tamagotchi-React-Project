import React from "react";
import { Button } from "react-bootstrap";

function Feed(props){

  var buttonStyles = {
    width: "100px"
  }

  return (
    <div>
      <Button block bsStyle="warning" bsSize="large" style={buttonStyles}>Feed</Button>
    </div>
  );
}

export default Feed;
