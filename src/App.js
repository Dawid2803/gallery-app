import React, { Component } from 'react'
import axios from "axios"
import SearchForm from './components/SearchForm'
import Nav from './components/Nav'
import Config from "./components/Config"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import NotFound from './components/NotFound'
import PhotoContainer from './components/PhotoContainer'
import apiKey from './components/Config'

export class App extends Component {

  state={
    photoGal:[]
  };
  
  componentDidMount(){
    axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=09c4b273fe9136275a25231194314587&tags=cats&per_page=24&format=json&nojsoncallback=1')
  .then(response => { 
    this.setState({
      photoGal: response.data.photos.photo
    })
    console.log(this.state.photoGal);
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
  }

  render() {
    const apiK = apiKey;
    console.log(apiKey);
    return (
      <Router>  
        <div>
          <SearchForm />
          <Nav topics={["Cats","Dogs", "Computers"]} />
          <PhotoContainer photoGallery={this.state.photoGal}/>
          

        </div>
      </Router>
    )
  }
}

export default App
