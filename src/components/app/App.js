import React, {Component} from 'react';
import { Route } from "react-router-dom";
import Home from "../home/Home";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path="/" component={Home}/>
        <Footer/>
      </div>
    );  }
}
export default App;
