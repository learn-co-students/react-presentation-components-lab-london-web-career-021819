// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {

    state = {
        mood: "happy"
    }

    handelClick = () => {
        this.state.mood === "happy" ? this.setState( {mood: "sad"} ) : this.setState( {mood: "happy"} )
    }

    render() {
        return(
           <div
           onClick = {this.handelClick}
           >{this.state.mood}</div> 
        )
    }
}

export default SimpleComponent
