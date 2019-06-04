import React,  {Component} from "react";

export default class BookCard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {bookItem} = this.props; 
        return(
            <div className="card">
                <img src={bookItem.image}/>
                <h4>{bookItem.title}</h4>
                <h5>{bookItem.author}</h5>
            </div>
        );
    }
}