import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import "./myAccount.css";

export default class MyAccount extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false,
            username: ''
        }
    }
    componentWillMount(){
        if(sessionStorage.getItem('user')){
        }
        else {
          this.setState({redirect: true});
        }
      }

      render() {
          if(this.state.redirect) {
              return <Redirect to="login"/>
          }
          return(
              <div className="my-acc-page">
                  <div className="options">
                      <ul>
                      <li>My Profile</li>
                      <li>My Whishlist</li>
                      <li>Account Settings</li>
                      <li>Payment Settings</li>
                      </ul>
                  </div>
                  <div className="profile-part">
                    <h4 className="hello-title">Welcome to Your Profile!</h4>
                    <h3 className="complete-account">Seems you are here first time! Complete your Profile.</h3>
                    <img src="https://www.blurb.com/images/register_success/steps_avatar.png"></img>
                </div>
            </div>
          );
      }
}