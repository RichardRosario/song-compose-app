import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    
//making sure data is available before using
    if(!song) { return <div>Loading...</div>;}


    return (
      <div>
       <Link to="/"><button className="btn btn-primary">Back</button></Link>
        <h4>{song.title}</h4>
        <LyricList lyrics={song.lyrics}  />
        <LyricCreate songId={this.props.params.id} />

      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => { 
    return { variables: { id: props.params.id } } 
  }
})(SongDetail);