import React from 'react';

const GifList = (props) => {

  render(){
    return props.gifs.map(gif => {
      return(
        <li key={gif.id}>
          <img src={gif.images.original.url}/>
        </li>
      );
    });
  }
}

export default GifList;
