import React, { Component } from 'react';

export default class Content extends Component {

  constructor(props) {
      super(props);
      this.state = {
          header: "Ini Header dari State",
          name: "",
          age: ""
      }
      this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    if (e.target.id === 'name') {
    	this.setState({name : e.target.value});
    } else {
    	this.setState({age : e.target.value});
    }
 	}
  
	render() {
    return (
      <div className="App">
          <div className="App-header">
            <h2>{this.state.header}</h2>
          </div>
          <p className="App-intro">
            Nama : {this.state.name} <br />
            Umur : {this.state.age}
          </p>
          <input type="text" id="name" value={this.state.name} onChange={this.updateState}/><br />
          <input type="text" id="umur" value={this.state.age} onChange={this.updateState}/>
      </div>
    );
	}
}

