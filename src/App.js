import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      
        <div className="App">
			<div className="App__Left">
				<div className= "logo">
					<img src={logo} width = "200" height= "100"/>
				</div>
			</div>
			<div className="App__Right">
				<div className= "PageSwitcher">
					<a href="a" className= "PageSwitcher__Item">Sign Up </a>
					
				</div>
			<div className= "FormTitle">
				<a href = "#" className= "FormTitle__Link">Log In</a>
			</div>
			
			<div className= "FormCenter">
				<form className = "FormFields" onSubmit = {this.handleSubmit}>
					<div className = "FormField">
						<label className = "FormField__Label" htmlFor= "username"> User Name</label>
						<input type = "text" id = "username" className = "FormField__Input" placeholder = "Please enter your username" name = "username"/>
					</div>
				
					<div className = "FormField">
						<label className = "FormField__Label" htmlFor= "password"> Password</label>
						<input type = "password" id = "password" className = "FormField__Input" placeholder = "Please enter password" name = "password"/>
					</div>
					
					
					<div className= "FormField">
						<button className = "FormField__Button mr-20"> Log In</button>
					</div>
					<div className= "FormField">
						<a href = "#" className= "FormField__Link"> Not a member?</a>
					</div>
					
				
				</form>	
			
			</div>
			</div>
          
        </div>
      
    );
  }
}

export default App;
