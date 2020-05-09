import React, { Component } from 'react';

export class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  onSubmit (event) {
    event.preventDefault();

  }
  render() {
    return (
      <div>
        <h3>Create a new song</h3>
        <form action="" onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="">Song Title</label>
          <input
            type="text"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SongCreate;
