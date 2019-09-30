import React, { Component } from "react";
import axios from "axios";

export default class EventSearch extends Component {
  constructor(props) {
    super(props);

    this.onChangeKeywords = this.onChangeKeywords.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      keywords: "",
      location: "",
      date: new Date(),
      users: []
    };
  }

  /*   componentDidMount() {
    // present text boxes for user to fill in keywords, location and date
  } */

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
  onChangeDate(e) {
    this.setState({
      date: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const event = {
      keywords: this.state.keywords,
      location: this.state.location,
      date: this.state.date
    };

    console.log(
      "event: " + event.keywords + "," + event.location + ", " + event.date
    );

    // go to search endpoint
    axios
    .post("http://localhost:5000/events/", event)
    .then(res => console.log("What we posted: " + res.data))
    .catch(err => console.log("axios post error: " + err));

    // show what was searched to let user respond

    // insert into database

    // window.location = '/';
  }
  render() {
    return (
      <section className="search-events">
        <h3>Search Events</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="keywords-input">
              What type of event do you want to search for?
            </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.keywords}
              onChange={this.onChangeKeywords}
              id="keywords-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location-input">Location: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
              id="location-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date-select">Date: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.date}
              onChange={this.onChangeDate}
              id="date-select"
            >
              <option key="Today" value="Today">
                "Today"
              </option>
              <option key="This Week" value="This Week">
                "This Week"
              </option>
              <option key="Next week" value="Next week">
                "Next week"
              </option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Search Event"
              className="btn btn-primary"
            />
          </div>
        </form>
      </section>
    );
  }
}
