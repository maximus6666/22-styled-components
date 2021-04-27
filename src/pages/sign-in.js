import React from 'react';
import icon from"../padlock.svg"
import "../styles/sign-style.css"
import Input from "../components/Input.js"


import {
  Link,
  useRouteMatch,
} from "react-router-dom";
export default class SignInOage extends React.Component {
  state = {
    email: "",
    password: "",
    rememberMe: false
  }

  rememberMeChangeHandler = () => {
    this.setState({
      rememberMe: this.state.rememberMe ? false : true
    })
  }

  emailChangeHandler = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  passwordChangeHandler = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  getDataForSign = () => {

  }

  render() {
    console.log(this.state.email);
    console.log(this.state.password);


    return(
      <div className="sign-wrapper">
        <div className="icon-wrapper">
          <img className="icon-lock" src={icon} alt="icon"/>
        </div>
        <h1 className="sign-header">Sign in</h1>
        <div className="content-wrapper">
        <div className="input-wrapper">
          <Input type="text" placeholder="Email address*" onChange={this.emailChangeHandler}/>
          <Input type="password" placeholder="Password" onChange={this.passwordChangeHandler}/>
          <div>
            <label className="checkbox-remember-me">Remember me
              <input onChange={this.rememberMeChangeHandler} checked={this.state.rememberMe} type="checkbox" />
              <span class="checkmark"></span>
            </label>  
          </div>
        </div>
        <div className="button-wrapper">
          <button className="sign-button">Sign in</button>
          <div className="link-wrapper">
            <Link>Forgot password?</Link>
            <Link to={`/sign-up`}>Dont have an account? Sign up</Link>
          </div>
        </div>
        <p className="copyright">Copyright © Your Website 2021</p>
        </div>
        
      </div>
    )
  }
} 
