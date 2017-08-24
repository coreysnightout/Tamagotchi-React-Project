import React from "react";
import { Button } from "react-bootstrap";


function Feed(props){


  var buttonStyles = {
    width: "100px"
  }


  if (props.AddFeedTama.hungerLevel === 0){
    // alert('dead')
  }

  return (
    <div>
      <Button onClick={props.feedTama} block bsStyle="warning" bsSize="large" style={buttonStyles}>Feed</Button>
      <h3>{props.AddFeedTama.hungerLevel}</h3>
    </div>
  );
}

export default Feed;
