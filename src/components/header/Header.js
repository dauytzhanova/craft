import React, {Component} from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home/Home";
import "./header.css";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import SearchResult from "../searchResults/SearchResult";
import Cart from "../cart/Cart";
import BookDetails from "../bookDetails/BookDetails";
import MyAccount from "../MyAccount/MyAccount";
import NewArrivals from "../newArrivals/NewArrivals";
import BestSellers from "../bestsellers/BestSellers";
import Category from "../category/Category";
import Genre from "../genre/Genre";
import MyWishlist from "../mywishlist/MyWishlist";

class Header extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        
        this.state = {
          popupVisible: false,
          search1: "",
          showLogIn:false,
          showLogOut:false,
        };
        this.updateSearch = this.updateSearch.bind(this);

      }

      componentWillMount(){
        if(sessionStorage.getItem('user')){
          this.setState({showLogOut:true});
        }
        else {
          this.setState({showLogIn:true});
        }
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
      logout(){
        sessionStorage.setItem("user",'');
        sessionStorage.clear();
   }
  
      handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target.node)) {
            return;
        }
        
        this.handleClick();
      }
      updateSearch(e) {
        this.setState({
            search1: e.target.value.substr(0,20)
        });
    }
    
    render() {
        return (
            <div>
                <div className="header">
                    <Link className="logo" to="/home">Craft</Link>
                    <nav className="nav">
                        <Link className="nav__link" to="/home" activeStyle={{color: "#159675"}}>Home</Link>
                        <Link className="nav__link" activeClassName={"active"} to="/cart">Cart</Link>
                        <div className="dropdown" ref={node => { this.node = node; }}>
                            <button onClick={this.handleClick} className="dropbtn"><Link className="nav__link" to="account">My Account</Link></button>
                            {this.state.popupVisible && (
                            <div id="myDropdown" className="dropdown-content">
                            {this.state.showLogIn && <a href="/login">Log In</a>}
                            {this.state.showLogIn && <a href="/signup">Sign Up</a>}
                           {this.state.showLogOut &&  <Link to="/wishlist"> My Wishlist</Link>} 
                           {this.state.showLogOut && <a onClick= {this.logout} href="/home">Log Out</a>}
                          
                        </div>)}
                </div>
                    </nav>
                    <div className="search-filed">
                        <input type="text" className="search-input" onChange={this.updateSearch} placeholder="Search books"></input>
                        <div className="search-button-box"><button className="search-button"><Link  className="search-title" to="/search" >Search</Link></button></div>
            </div>                    
            </div>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/wishlist" component={MyWishlist}/>
          <Route exact path="/book" component={BookDetails}/>
          <Route exact path="/account" component={MyAccount}/>
          <Route exact path="/search" render = {props=><SearchResult search1={this.state.search1}></SearchResult>
          }/>
          <Route exact path ="/arrivals" component={NewArrivals}/>
          <Route exact path ="/category" component={Category}/>
          <Route exact path ="/genre" component={Genre}/>
          <Route exact path ="/bestsellers" component={BestSellers}/>
          <Route exact path ="/bookDetails" component={BookDetails}/>
        </div>
        );
    }
}

export default Header;