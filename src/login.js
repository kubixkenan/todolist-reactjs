import React from 'react';
import apiService from './apiService';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email: '', password: ''};
    }

    login(){
        const _apiService = new apiService();
        _apiService.post('Auth/Login', { email: this.state.email, password: this.state.password  }, this.loginCompleted);
    }

    loginCompleted(response){
        if(response && response.token){
            localStorage.setItem('token', response.token);
            window.location.reload();
        }
    }

    handleChange = event => {        
        this.setState({ [event.target.name]: event.target.value });
    };
  
    render() {
      return (
        <div style={{textAlign:'center', padding:50}}>
        <h1>Login</h1>
        <br />
        <input type="text" name="email" onChange={this.handleChange} placeholder="E-Mail" value={this.state.email} style={{padding:5}}></input>
        <p/>
        <input type="password" name="password" onChange={this.handleChange} placeholder="Password" value={this.state.password} style={{padding:5}}></input>
        <p />
        <button onClick={e => this.login()}>Login</button>
    </div>
      );
    }
  }

export default Login;