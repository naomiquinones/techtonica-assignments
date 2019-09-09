import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeKeywords = this.onChangeKeywords.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      keywords: '',
      location: '',
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    this.setState({
      users: ['fake user hardcoded into setState in componentDidMount'],
      username: 'test user'
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeKeywords(e) {
    this.setState({
      keywords: e.target.value
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const event = {
      username: this.state.username,
      keywords: this.state.keywords,
      location: this.state.location,
      date: this.state.date
    }

    console.log(event)

    window.location = '/';
  }
  render() {
    return (
      <section>
        <h3>Create New Event</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username-select">Username: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              id="username-select">
                {
                  this.state.users.map(function(user) {
                    return <option
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
              </select>
          </div>
          <div className="form-group">
            <label htmlFor="keywords-input">Keywords: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.keywords}
              onChange={this.onChangeKeywords}
              id="keywords-input"
              />
          </div>
          <div className="form-group">
            <label htmlFor="location-input">Location: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
              id="location-input"
              />
          </div>
          <div className="form-group">
            <label htmlFor="date-input">Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
                id="date-input"
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Event" className="btn btn-primary" />
          </div>
        </form>
      </section>
    );
  }
}