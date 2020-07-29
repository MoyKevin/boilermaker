import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'


// Component

class Root extends Component{

  render(){
    return(
      <Router>
        <div id="main" className='container-App'>
          <Route exact path='/' component = {Home} />
        </div>
      </Router>
    )
  }
}
