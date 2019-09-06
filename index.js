import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { NumButton } from './numButton';
class Calculator extends React.Component {
  numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  signArray = ['*', '/', '+', '-'];
  state = {
    val1: "",
    val2: "",
    sign: "",
    mem: "",
  }
  numClick = e => {
    if (this.state.sign == "")
      this.setState({ val1: this.state.val1 + e.target.innerHTML });
    else
      this.setState({ val2: this.state.val2 + e.target.innerHTML });
  };

  signClick = e => {
    this.setState({ sign: e.target.innerHTML });
  };
  resultClick = e => {
    var result = eval(this.state.val1 + this.state.sign + this.state.val2);
    this.setState({
      val1: (result == Infinity) ? "" : result,
      val2: "",
      sign: ""
    });
  }
  clear = () => {
    this.setState({ val1: "", val2: "", sign: "" });
  }

  render() {
    return (<div>

      <input value={this.state.val1 + this.state.sign + this.state.val2} disabled />

      <NumButton text='mem' className={this.state.val1 ? "" : "disable"}
        onClick={() => this.setState({ mem: this.state.val1 })} />

      <NumButton text='load'
        className={this.state.mem ? "" : "disable"}
        onClick={() => this.setState({ val1: this.state.mem, val2: "", sign: "" })} />

      <input value={this.state.mem} disabled />

      <div>
      
        {this.numArray.map(num => <NumButton text={num} onClick={e => this.numClick(e)} />)}

        {this.signArray.map(sign => <NumButton text={sign} onClick={e => this.signClick(e)} className=
          {this.state.val1 == "" ? "disable" : ""} />)}

        <NumButton text='=' className={this.state.val2 ? "" : "disable"}
          onClick={e => this.resultClick(e)} />

        <NumButton text='C' onClick={() => this.clear()} />

      </div>
    </div>);
  }
}


render(<Calculator />, document.getElementById('root'));
