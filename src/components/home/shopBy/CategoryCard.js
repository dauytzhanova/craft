import React, {Component} from 'react';
import "./categoryCard.css";

export default class CategoryCard extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div className="category-card">
                <h2 className="category-title">{this.props.title}</h2>
                <img className="category-image" src={this.props.image}></img>
            </div>
        );
    }
}   