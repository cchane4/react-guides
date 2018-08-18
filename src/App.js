/*this react import statement is needed to rendering to the DOM*/

import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"; 
// react calls render method to render something to the screen 
// IMPORTANT :every react component has to return or render some html code to the DOM
class App extends Component {
  render() {
    return (
      // this code is actually javascript 
      // its just syntactical sugar 
      //everything is nested inside one root element (div with App class)
      <div className="App">
      <h1> Hi, Im a React App</h1>
      <p> This is really working</p>
      <Person></Person>
      </div>

    );
    // create a div with a javascript object of class named "App"; that object has nested 
    // inside of it, create an h1 element with a null value but attach to the h1 element some text "Hi Im a React App"
   // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hi, Im a React App')); 
  }
}
// if you import the whole file, you  by default import the App class.
export default App;
