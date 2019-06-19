import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./auth.css";

const emailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/);

const formValid = ( {formErrors, ...rest} ) => {
    let valid = true;
    Object.values(formErrors).forEach(val => {val.length>0 && (valid = false)});
    console.log(valid);
    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    });   

    return valid;
}

export default class SignUp extends Component{
constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
        username: "",
        email: "",
        password:"",
        formErrors: {
            emailError: "",
            usernameError: "",
            passwordError: ""
        }
    }

    this.getPhp = this.getPhp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

    handleChange(e) {
        e.preventDefault();
        let target = e.target;
        let value = target.value;
        let name = target.name;
        let formErrors = this.state.formErrors;

            if (name === "email") {
                if(value.length===0) {
                } 
                if (emailRegex.test(value) && value.length >= 0) {  
                    //formErrors.emailError=""; 
                       this.setState({
                        [name]: value,});  
                      } else {
                        formErrors.emailError = "Invalid Email Address!";
             
                }
            }
            if (name === "username") {
                if(value.length===0) {
                }
                if (value.length < 3 && value.length>0) {  
                    formErrors.usernameError = "Username length should be at least 3"
                   
                } else {
                    formErrors.usernameError = "";
                    this.setState({
                        [name]: value,}); 
            }
        }
            if (name === "password") {
                if(value.length===0) {
                }
                if (value.length < 6) {   
                    formErrors.passwordError = "Password length should be at length 6"
                 
                } else {
                    formErrors.passwordError = "";
                    this.setState({
                        [name]: value,});
              
                    }
            }
            
            
           this.setState({
               formErrors,[name]:value
    }, () => console.log(this.state)   );
    }
    handleSubmit(e){
        e.preventDefault();
       
}

   getPhp(){
    fetch('http://localhost/craft/api/demo.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        })
      }).then(res => res.json()).then(response => 
       response.map(el => {
           console.log(el.email);
       }))

   }

   render() {
        return (
            <div className="auth-page">
                <div className="auth-page-box">
                    <h2 className="auth-title">Sign Up</h2>
                    <div className="validate">
                        <h6>{this.state.formErrors.emailError}</h6>
                        <h6>{this.state.formErrors.usernameError}</h6>
                        <h6>{this.state.formErrors.passwordError}</h6>
                    </div>
                    <form onSubmit={e => this.handleSubmit}  className="auth-form" method="post">
                        <label className="auth-label">Email: </label>
                        <input onChange={e => this.handleChange(e)} type="email" name="email" className="auth-input" value={this.state.email} required/>
                        <label className="auth-label">Username: </label>
                        <input onChange={e => this.handleChange(e)} type="text" name="username" className="auth-input" value={this.state.username} required/>
                        <label className="auth-label">Password: </label>
                        <input type="password" onChange={e => this.handleChange(e)} name="password" className="auth-input" value={this.state.password}  required/>
                        <label className="terms">By clicking sign up you agree to Craft's Terms amd Conditions and Privacy Policy.</label>
                        <button type="submit" className="auth-button">Sign Up </button>
                    </form>
                    <h5 className="offer">Have an account?  <Link className="to-link" to="login">Log In</Link></h5>
                </div>
                <div className="auth-page-rest">
                    <h3 className="page-rest-off">Join and Get 35% Off</h3>
                    <ul className="page-rest-list">
                        <li className="list-element">Recieve Exclusive tips, insparations, and offers</li>
                        <li className="list-element">Get 35% off your first book!</li>
                        <li className="list-element">Download free book-making tools and templates</li>
                        <li className="list-element">Stay up-to-date on new products, webinars, and events</li>
                    </ul>
                </div>
            </div>
        );
    }
}