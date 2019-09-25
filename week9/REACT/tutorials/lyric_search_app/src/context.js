// provide is like any other React component
// wrap everything in the provider

import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  // like redux, evaluate action type
  switch(action.type){
    case 'SEARCH_TRACKS':
      return {
        ...state,
        track_list: action.payload,
        heading: 'Search Results'
      };
    default:
      return state;
  }
}
// we are exporting a class but not default
// because we are also exporting a consumer

// whatever state we put in provider we can access
// from any other component that uses consumer

// could use a constructor, but no need here
// so just setting state

// componentDidMount is a lifecycle method available
// with any class based component

export class Provider extends Component {
  state = {
    track_list: [],
    heading: 'Top 10 Tracks',
    dispatch: action => this.setState(state => reducer(state, action))
  }

  componentDidMount(){
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=15&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
      .then(res => {
        // console.log(res.data);
        this.setState({track_list: res.data.message.body.track_list})
      })
      .catch( err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

// this is what we import into component to access 
// the state from the context
// similar to connect with redux to map state to props
export const Consumer = Context.Consumer;