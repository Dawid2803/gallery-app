import React, { Component } from 'react'
import SearchForm from './components/SearchForm'
import Nav from './components/Nav'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import NotFound from './components/NotFound'
import PhotoContainer from './components/PhotoContainer'

export class App extends Component {
  render() {
    return (
      <Router>  
        <div>
          <SearchForm />
          <Nav topics={["Cats","Dogs", "Computers"]} />
          <PhotoContainer />
          

        </div>
      </Router>
    )
  }
}

export default App
