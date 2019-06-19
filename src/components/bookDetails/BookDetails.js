import React, {Component} from 'react';
import "./bookDetails.css"

let array = [];

export default class BookDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:"",
            comment: "",
            postedComments:[],
            showComments: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.postComment = this.postComment.bind(this);
    }

   addToCart(state){
       sessionStorage.setItem('items'+ state.id, state);
   }

   addToWishList(state){
    sessionStorage.setItem('item'+ state.id, state);
}

   handleChange(e){
    let target = e.target;
    let value = target.value;
    let name = target.name;
    
    this.setState({
        [name]: value}); 
}

    postComment(){
        array.push(this.state.comment);
        this.setState({
            showComments:true,
            postedComments:array    
        });
    }

    deleteComment = (e) => {
        this.state.postedComments.filter(comment=>{
           return this.state.comment !== e.target.value;
        });
        window.location.reload(true);
    }
  
    render() {
        return (
            <div className="book-details">
                <div className="book-details-container">
                    <div className="book-preview">
                        <div className="book-preview-img-block"><img className="book-preview-img" src={this.props.location.state.image}/></div>
                        <div className="book-preview-general">
                            <div className="book-details-title">{this.props.location.state.title}</div>
                            <div className="book-details-author">{this.props.location.state.author}</div>
                            <div className="book-details-price">${this.props.location.state.price}</div>
                            <button className="details-add-too-cart" onClick={this.addToCart(this.props.location.state)}>Add to Cart</button>
                            <button className="details-add-too-cart wishlist" onClick={this.addToWishList(this.props.location.state)}>Add to My WishList</button>
                        </div>
                    </div>
                    <div className="book-preview-detailed">
                        <div className="about-the-book">
                            <h3 className="about-the-book-title">About the Book</h3>
                            <p className="about-the-book-p">{this.props.location.state.description}</p>
                        </div>
                        <div className="book-features-details">
                            <h3 className="book-features-details-title">Features and Details</h3>
                            <div className="book-details-elements">
                                <p className="features-elements"><span className="details-custom">Category:</span> {this.props.location.state.category}</p>
                                <p className="features-elements"><span className="details-custom">Size: </span>{this.props.location.state.size}</p>
                                <p className="features-elements"><span className="details-custom"> ISBN:</span>{this.props.location.state.isbn}</p>
                                <p className="features-elements"><span className="details-custom">Publish Date:</span>{this.props.location.state.publishedDate}</p>
                                <p className="features-elements"><span className="details-custom">Language:</span>{this.props.location.state.language}</p>
                            </div>
                        </div>
                    </div>
                    <div className="posted-comments">
                    <h3 className="comment-block-title">Comments</h3>
                        {this.state.showComments ? this.state.postedComments.map((comment,id) => {
                         return<div class="posted-comments-c"> <div classnaem="comment-block"key={id}>
                                <h4 className="comment-author">by {this.state.userName}</h4>
                                <p className="comment-content">{comment}</p>
                                <button className="comment-delete" onClick={e => this.deleteComment(e)}>Delete</button>
                            </div></div>
                        }):null}
                    </div>
                    <div className="book-comments">
                        <h3 className="add-comment-title">Add Comment</h3>
                        <textarea className="userName-text-area" name="userName" onChange={e => this.handleChange(e)} value={this.state.userName}></textarea>
                        <textarea className="add-comment-text-area" name="comment" onChange={e => this.handleChange(e)} value={this.state.comment}></textarea>
                        <button className="add-comment-button" onClick={this.postComment}>Post Comment</button>
                    </div>
                </div>
            </div>
        );
    }
}