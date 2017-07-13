import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

class Andre extends Component {
	render() {
		return (
			<div className="App">
				<p> Andre </p>
				<img src="https://www.w3schools.com/css/img_lights.jpg" />
			</div>
		);
	}
}

export default Andre;
