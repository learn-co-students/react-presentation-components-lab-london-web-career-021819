import React, { Component } from 'react'

class SimpleComponent extends Component {

  state = {
    mood: 'happy'
  }

  handleClick = () => {
    const moodToggle = {happy: 'sad', sad: 'happy'}
    this.setState({
      mood: moodToggle[this.state.mood]
    });
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }

}

export default SimpleComponent
