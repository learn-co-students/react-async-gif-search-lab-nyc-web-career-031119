import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer';

// the App component should render out the GifListContainer component

const App = () => {
  return (
    <div className="container">
      <NavBar color='black' title="Giphy Search" />
      <GifListContainer />
    </div>
  )
}

export default App
