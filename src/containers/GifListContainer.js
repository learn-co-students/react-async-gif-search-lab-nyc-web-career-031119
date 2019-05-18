import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

const GIPHY_API_KEY = "&limit=3&api_key=0PaWnKgYJ0DDJg949bZZnRnAMtW3fKsI";
const URL = "http://api.giphy.com/v1/gifs/search?q=";

class GifListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: [],
      searchTerm: "all" // <= this is effectively a placeholder and is not reset
    }
  }

  componentDidMount() {
    fetch(`${URL}${this.state.searchTerm}${GIPHY_API_KEY}`)
    .then(res => res.json())
    .then(gifs => {
      this.setState({gifs: gifs.data});
    })
    .catch(error => {
      alert(error.message);
      console.log(error.message);
    })
  }

  handleSearch = (param) => {
    fetch(`${URL}${param}${GIPHY_API_KEY}`)
    .then(res => res.json())
    .then(gifs => {
      this.setState({gifs: gifs.data});
    })
    .catch(error => {
      alert(error.message);
      console.log(error.message);
    })
  }


  render() {
    console.log(this.state.gifs)
    console.log("search term:", this.state.searchTerm)
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <GifList gifs={this.state.gifs} />
          </div>
          <div className="col-md-6">
            <GifSearch handleSearch={this.handleSearch}/>
          </div>
        </div>
      </div>
    )
  }
}

export default GifListContainer;
