import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        <div 
            class="hourHand" 
            style={{transform: `rotateZ(${this.state.time.getHours() * 30}deg)`
            }}></div>
        <div 
            class="minuteHand"
            style={{
                transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
              }}></div>
        <div 
            class="secondHand"
          style={{
            transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`}}></div>
        <div class="center"></div>
        <div class="time">{new Date().toLocaleTimeString()}</div>
        <div class="owner">Famirqfr</div>
        <div class="brand">React</div>
        <ul>
            <li><span>1</span></li>
            <li><span>2</span></li>
            <li><span>3</span></li>
            <li><span>4</span></li>
            <li><span>5</span></li>
            <li><span>6</span></li>
            <li><span>7</span></li>
            <li><span>8</span></li>
            <li><span>9</span></li>
            <li><span>10</span></li>
            <li><span>11</span></li>
            <li><span>12</span></li>
        </ul>
      </div>
    );
  }
}
