import React, {Component} from "react";
import CategoryList from "./CategoryList";
import {Link} from "react-router-dom";
import "./shopBy.css";

export default class ShopBy extends Component{
    constructor(props) {
        super(props);
        this.state={
            by: ""
        }
        this.changeBy = this.changeBy.bind(this);
    }
    changeBy() {
        this.setState({
            by:"/"+this.props.name.toLowerCase()
        })
    }
    render() {
        const {e} = this.state.by;
        return (
            <div className="shop-by-category">
                <h2 className="shop-by-title">Shop By {this.props.name}</h2>
                <CategoryList name={this.props.name}></CategoryList>
                <Link  to="#" className="shop-all">shop all {this.props.name}</Link>
            </div>
        );
    }
}