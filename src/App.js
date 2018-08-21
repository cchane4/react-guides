/*this react import statement is needed to rendering to the DOM*/

import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"; 

// react calls render method to render something to the screen 
// IMPORTANT :every react component has to return or render some html code to the DOM
// classes have properties or variables of class; one of those properties of components created by extending components is state
class App extends Component {
  state = { 
    persons: [
    { name: "Max", age: 20 },  
    { name: "Alex", age: 29 }, 
    { name: "Steph", age: 46 }
    ], 
    otherState: "some other value" 
  } 

  switchNameHandler = (newName) => {
   // console.log('Was Clicked'); 
   // DONT DO THIS: this.state.persons[0].name = "Max"; 
   this.setState({persons: [
    { name: newName, age: 70 },  
    { name: "Alex", age: 49 }, 
    { name: "Steph", age: 47 }
   ]
  })
  }

  nameChangedHandler = (event) => {
    // console.log('Was Clicked'); 
    // DONT DO THIS: this.state.persons[0].name = "Max"; 
    this.setState({persons: [
     { name: "Max", age: 70 },  
     { name: event.target.value, age: 49 }, 
     { name: "Steph", age: 47 }
     ]
    })
   }




  render() {
    const style = { 
      backgroundColor: "red",
      font: "inherit", 
      border: '1px solid blue', 
      padding: "8px",
      cursor: 'pointer'
    }; 

    return (
      // this code is actually javascript 
      // its just syntactical sugar 
      //everything is nested inside one root element (div with App class)
      // for component interaction we pass reference to the handler in the click method as a  property to our component
      <div className="App">
      <h1> Hi, Im a React App</h1>
      <p> This is really working</p>
      <button
      style={style} 
      onClick={this.switchNameHandler.bind(this, "Max")}> Switch Name</button>
  
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}>
      </Person>

      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this, "Max!!")}
      changed={this.nameChangedHandler}>
      </Person>


      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}>
      </Person>
   
      </div>

    );
    // create a div with a javascript object of class named "App"; that object has nested 
    // inside of it, create an h1 element with a null value but attach to the h1 element some text "Hi Im a React App"
   // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hi, Im a React App')); 
  }
}
// if you import the whole file, you  by default import the App class.
export default App;
