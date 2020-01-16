import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(({ title, id }) => (
      <li key={id} className="collection-item">
        {title}
      </li>
    ));
  }
  render() {
    if (this.props.data.loading) return <h1>Loading...</h1>;

    return <ul className="collection">{this.renderSongs()}</ul>;
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;
export default graphql(query)(SongList);
