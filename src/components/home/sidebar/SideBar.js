import React, { Component }  from 'react';
import  MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import "./sidebar.css";
import { Router, Route} from 'react-router'
import { Link } from 'react-router-dom';
import NewArrivals from '../../newArrivals/NewArrivals';
import Category from '../../category/Category';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenC:false,
            isOpenG:false,
        }
       }

    handleClickC = (e) => {
        e.preventDefault();
        console.log('clicked');
        this.setState({
            isOpenC: !this.state.isOpenC,
        });
    }

    handleClickG = (e) => {
        e.preventDefault();
        console.log('clicked');
        this.setState({
            isOpenG: !this.state.isOpenG,
        });
    }

    render() {
        return(
            <div>
               <MenuList className="menu-list">
                <MenuItem className="menu-item"><Link to="/arrivals">Arrivals</Link></MenuItem>
                <MenuItem className="menu-item"><Link to ="/bestsellers">Bestsellers</Link></MenuItem>
                <MenuItem className="menu-item" onClick={this.handleClickC}>Categories</MenuItem>
                {this.state.isOpenC ? (
                     <MenuList >
                             <MenuItem className=" menu-item menu-item--nested" ><Link to={{
                                 pathname: `/category`,
                                 state: {
                                     category:"fiction",
                                 }
                                }}>Fiction</Link></MenuItem>
                             <MenuItem className=" menu-item menu-item--nested" ><Link to={{
                                 pathname: `/category`,
                                 state: {
                                     category:"non-fiction",
                                 }
                                }}>Non-Fiction</Link></MenuItem>
                            </MenuList>):null
                }
                <MenuItem className="menu-item" onClick={this.handleClickG}>Genre</MenuItem>
                {this.state.isOpenG ? (
                     <MenuList >
                             <MenuItem className=" menu-item menu-item--nested" ><Link to={{
                                 pathname: `/genre`,
                                 state: {
                                     genre:"drama",
                                 }
                                }}>Drama</Link></MenuItem>
                            <MenuItem className=" menu-item menu-item--nested" ><Link to={{
                                 pathname: `/genre?genre=romance`,
                                 state: {
                                     genre:"romance",
                                 }
                                }}>Romance</Link></MenuItem>
                             <MenuItem className=" menu-item menu-item--nested" ><Link to={{
                                 pathname: `/genre`,
                                 state: {
                                     genre:"adventure",
                                 }
                                }}>Adventure</Link></MenuItem>
                                <MenuItem className=" menu-item menu-item--nested" ><Link to={{
                                 pathname: `/genre`,
                                 state: {
                                     genre:"poetry",
                                 }
                                }}>Poetry</Link></MenuItem>
                            </MenuList>):null
                }
            </MenuList>   
            
          
        </div>
        );
    }
}