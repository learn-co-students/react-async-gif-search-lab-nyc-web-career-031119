import React, { Component } from 'react';

class GifList extends Component {

  generateListItems = () => {
    return this.props.gifs.map(gif => {
      return <li key={gif.id}><img src={gif.images.original.url} /></li>
    });
  }

  render() {
    return (
      <ul>
        {this.generateListItems()}
      </ul>
    )
  }
}

export default GifList;
