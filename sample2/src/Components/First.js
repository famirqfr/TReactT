import { Component } from "react";
import PropTypes from 'prop-types';


export default class First extends Component{
  render() {

    let age = 10
    let current = 14
    let year = ' years old'

    return [
        <div>
          my age is {age} is {year}
        </div>,
        <div />
    ];
  }
}