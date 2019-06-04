import React, { Component }  from 'react';
import  MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import "./sidebar.css";

export default class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            categories: ["Fiction","Non-fiction","Biographies","History","More..."],
            isOpen:false,
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log('clicked');
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        return(
             <MenuList className="menu-list">
                <MenuItem className="menu-item">New Arrivals</MenuItem>
                <MenuItem className="menu-item">Bestsellers</MenuItem>
                <MenuItem className="menu-item" onClick={this.handleClick}>Categories </MenuItem>
                {this.state.isOpen ? (
                     <MenuList >
                        {this.state.categories.map((id,name) => {
                            return <MenuItem className=" menu-item menu-item--nested" key={id}>{this.state.categories[name]}</MenuItem>
                        })}
                    </MenuList>):null
                }
                                <MenuItem className="menu-item">About Us</MenuItem>

            </MenuList>
        
        );
    }
}