import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import "./auth.css";

export default class Login extends Component{
    constructor(){
        super();
        this.login = this.login.bind(this);
        this.state= {
            username:'',
            password:'',
            redirect: false,
            isLogin: false,
        }
        this.login = this.login.bind(this);
       // this.logout = this.logout.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

   login () {
       if(this.state.username && this.state.password) {
            fetch('http://localhost/craft/api/users.php', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                })
              }).then(res => res.json()).then(response => {
                sessionStorage.setItem("user",response) 
                this.setState({redirect:true, isLogin:true}) }
                )
                
           
           
       }
   } 
    handleChange(e){
    let target = e.target;
    let value = target.value;
    let name = target.name;
    
    this.setState({
        [name]: value}); 
}
   

   handleSubmit(e){
    e.preventDefault();
}
   render() {
       if(this.state.redirect) {
           return <Redirect to="/home"/>
       }
       if(sessionStorage.getItem('user')) {
        return <Redirect to="/home"/>
    }
        return (
            <div className="auth-page">
                <div className="auth-page-box">
                    <h2 className="auth-title title-login">Log In</h2>
                    <form className="auth-form" method="post" onSubmit={e => this.handleSubmit(e)}>
                        <label className="auth-label">Username:</label>
                        <input onChange={e => this.handleChange(e)} type="text" name="username" value = {this.state.username} className="auth-input" required/>
                        <label className="auth-label">Password</label>
                        <input onChange = {e => this.handleChange(e)}  type="password" name="password" value={this.state.password} className="auth-input" required/>
                        <button type="submit" onClick={this.login} className="auth-button">Log In</button>
                    </form>
                    <h5 className="offer">Don't have an account? <Link className="to-link" to="login">Sign Up</Link></h5>
                </div>
                <div className="auth-page-rest rest-login">
                    
                </div>
            </div>
        );
    }
}