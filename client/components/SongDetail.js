import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import { Link } from 'react-router';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if(!song) { return <div>Loading...</div>;}


    return (
      <div>
       <Link to="/"><button className="btn btn-primary">Back</button></Link>
        <h4>{song.title}</h4>
       <Link
          to="/songs/new" 
          className="btn-floating btn-large green right">
          <i className="material-icons">add</i> 
        </Link>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => { 
    return { variables: { id: props.params.id } } 
  }
})(SongDetail);