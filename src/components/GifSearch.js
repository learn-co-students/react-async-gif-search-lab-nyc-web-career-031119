import React from 'react';

class GifSearch extends React.Component{
  state = {
    search: ''
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input className='search' type='text' value={this.state.search} onChange={this.handleSearch}/>
        <input className='btn btn-success' type='submit' value='Search gifs'/>
      </form>
    )
  }
};

export default GifSearch;
