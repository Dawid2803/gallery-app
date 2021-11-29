import React, { Component } from 'react'
import SearchForm from './components/SearchForm'
import Nav from './components/Nav'
import { link, BrowserRouter } from "react-router-dom"
import NotFound from './components/NotFound'
import PhotoContainer from './components/PhotoContainer'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>  
        <div>
          <SearchForm />
          <Nav />
          <PhotoContainer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
