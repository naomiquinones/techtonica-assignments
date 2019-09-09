import React, { Component } from 'react';

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

    const exercise = {
      username: this.state.username,
      keywords: this.state.keywords,
      location: this.state.location,
      date: this.state.date
    }

    console.log(exercise)

    window.location = '/';
  }
  render() {
    return (
      <section>
        <p>You are looking at the Create Event component.</p>
      </section>
    );
  }
}