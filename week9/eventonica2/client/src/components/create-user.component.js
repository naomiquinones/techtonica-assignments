import React, { Component } from 'react';
import PasswordMask from 'react-password-mask';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      email: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    }

    console.log(user)

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <section className="create-user">
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username-input">Username: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              id="username-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-input">Password: </label>
            {/* <input type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              id="password-input"
            /> */}
            <PasswordMask 
              id="password-input"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              // useVendorStyles={false}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email-input">Email: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              id="email-input"
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </section>
    );
  }
}