// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {

  state = {
    mood: "happy"
  }

  changeMood = () => {
    const newMood = this.state.mood === "happy" ? "sad" : 'happy'

    this.setState({
      mood: newMood
    })
  }

  render() {
    return (
      <div onClick={this.changeMood}>{this.state.mood}</div>
    );
  }

}

export default SimpleComponent;
