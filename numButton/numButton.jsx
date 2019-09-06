import React, { Component } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';


export class NumButton extends Component {
  render() {
    return <button {...this.props}>
      {this.props.text}
    </button>
  }
}