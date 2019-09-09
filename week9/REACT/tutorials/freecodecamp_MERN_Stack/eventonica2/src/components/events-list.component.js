import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// functional component, does not have state
const Event = (props) => (
  <tr>
    <td>{props.event.username}</td>
    <td>{props.event.keywords}</td>
    <td>{props.event.location}</td>
    <td>{props.event.date.substring(0,10)}</td>
    <td>
      <Link className='btn btn-link' to={"/edit/"+props.event._id}>edit</Link> | <button className="btn btn-link" onClick={() => { props.deleteEvent(props.event._id) }}>delete</button>
    </td>
  </tr>
)

export default class EventsList extends Component {
  constructor(props) {
    super(props);

    this.deleteEvent = this.deleteEvent.bind(this);

    this.state = { events: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/events/')
      .then(res => {
        this.setState({ events: res.data })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  deleteEvent(id) {
    axios.delete('http://localhost:5000/events' + id)
      .then(res => console.log(res.data));

    this.setState({
      events: this.state.events.filter(el => el._id !== id)
    })
  }

  EventsList() {
    return this.state.events.map(currentEvent => {
      return <Event event={currentEvent} deleteEvent={this.deleteEvent} key={currentEvent.id}></Event>
    })
  }

  render() {
    return (
      <div className="event-list">
        <h3>Events List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Keywords</th>
              <th>Location</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.EventsList() }
          </tbody>
        </table>
      </div>
    );
  }
}
