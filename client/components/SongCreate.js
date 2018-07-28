import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

class SongCreate extends Component {
  constructor() {
    super();

    this.state = { title: '' };
  }

  onSubmitHandler(event) {
    event.preventDefault();

     this.props.mutate({
      variables: { title: this.state.title },
      refetchQueries: [{ query }]
    }).then(() => hashHistory.push('/'));
   }

  render() {
    return (
      <div>
        <Link to="/">
        <button className="btn btn-primary">Back</button>
        </Link>
        <h3> Create New Song!</h3>
        <form onSubmit={this.onSubmitHandler.bind(this)}>
          <label>Song Title</label>
          <input type="text" 
          onChange={event => this.setState({ title: event.target.value})}
          value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);