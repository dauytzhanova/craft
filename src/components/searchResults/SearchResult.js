import React, { Component } from 'react';
import ResultList from './ResultList';
import db from '../home/cards/db';
import Sidebar from "../home/sidebar/SideBar";
import "./searchResult.css";

export default class SearchResult extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);

        this.state = {
          popupVisible: false
        };
        
      }

      sortByPrice () {
        db.books.sort((a,b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        })
      }
    
      sortByAsc () {
        
       db.books.sort((a,b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
       })
      }

      sortByDesc() {
        db.books.sort((a,b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
         }).reverse();
      }

      handleClick() {
        if (!this.state.popupVisible) {
          // attach/remove event handler
          document.addEventListener('click', this.handleOutsideClick, false);
        } else {
          document.removeEventListener('click', this.handleOutsideClick, false);
        }
    
        this.setState(prevState => ({
           popupVisible: !prevState.popupVisible,
        }));
      }
      
      handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target.node)) {
            return;
        }
        this.handleClick();
      }
    
    render(){
      const {search1} = this.props;
        return (
            <div className="search-results">
                <div className="result-items">
                    <div className="results-info">
                        <h1 className="search-result-title">Search Results</h1>
                        <div className="dropdown" ref={node => { this.node = node; }}>
                    <button onClick={this.handleClick} className="dropbtn">Sort By<i className="arrow down"></i></button>
                    {this.state.popupVisible && (
                        <div id="myDropdown" className="dropdown-content">
                            <a href="#" onClick={this.sortByPrice}>Price</a>
                            <a href="#" onClick={this.sortByAsc}>Asc</a>
                            <a href="#" onClick={this.sortByDesc}>Desc</a>
                        </div>)}
                </div>
                    </div>
                        <ResultList resultList = {db.books} searchString={search1}/>
                </div>    
                <div className="">
                    <Sidebar/>
                </div>
                
                </div>
        );
    }
}