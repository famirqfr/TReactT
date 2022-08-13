import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Clock from "./Components/Clock/clock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount(){
    this.Interval = setInterval(() => this.tick(), 1000)
  }

  tick(){
    this.setState({
      time:new Date()
    })
  }
  componentWillUnmount(){
    clearInterval(this.Interval)
  }
  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
export default App;
