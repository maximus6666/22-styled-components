import React from 'react';
import icon from"../padlock.svg"
import "../styles/sign-style.css"
import Input from "../components/Input.js"

import {
  Link
} from "react-router-dom";

export default class SignUpPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    promotions: false
  }

  promotionsChangeHandler = () => {
    this.setState({
      promotions: this.state.promotions ? false : true
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

  firstNameChangeHandler = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }

  lastNameChangeHandler = (event) => {
    this.setState({
      lastName: event.target.value
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
        <h1 className="sign-header">Sign Up</h1>
        <div className="content-wrapper">
        <div className="input-wrapper">
					<div className="name-input-wpapper">
						<Input type="text" placeholder="First name*" onChange={this.firstNameChangeHandler}/>
          	<Input type="text" placeholder="Last name*" onChange={this.lastNameChangeHandler}/>
					</div>
          <Input type="text" placeholder="Email address*" onChange={this.emailChangeHandler}/>
          <Input type="password" placeholder="Password" onChange={this.passwordChangeHandler}/>
          <div>
            <label className="checkbox-remember-me">I want to receive inspiration, marketing promotions and updates via email
              <input onChange={this.promotionsChangeHandler} checked={this.state.promotions} type="checkbox" />
              <span class="checkmark"></span>
            </label>  
          </div>
        </div>
        <div className="button-wrapper">
          <button className="sign-button">Sign Up</button>
          <div className="link-wrapper flex-end">
            <Link to="/sign-in">Already have an account? Sign in</Link>
          </div>
        </div>
        <p className="copyright">Copyright © Your Website 2021</p>
        </div>
        
      </div>
    )
  }
} 
