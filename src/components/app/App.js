import React, {Component} from 'react';
import './App.css';
import Header from "../header/Header";
import Sections from "../sections/Sections";

class App extends Component {
  render() {
      return (
        <div className="App">
          <Header/>
          <Sections/> 
        </div>
      );
  }
}
export default App;
