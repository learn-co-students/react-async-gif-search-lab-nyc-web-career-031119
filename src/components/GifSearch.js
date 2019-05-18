import React, { Component } from 'react';

class GifSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    }
  }

  handleInput = (e) => {
    this.setState({
      userInput: e.target.value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.userInput);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input className="form-control" type="text" value={this.state.userInput} onChange={this.handleInput}/>
        <input className="btn btn-success" type="submit" value="Find Gifs" />
      </form>
    )
  }
}

export default GifSearch;
