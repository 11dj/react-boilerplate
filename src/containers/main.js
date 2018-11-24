import React from 'react'
import MainComponent from '../components/home'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  enableLoading,
  disableLoading
} from '../actions/loading'

import './style.css'


// Main container
export class MainContainer extends React.Component {
  render () {
    return (
      <div className={'main-container'}> 
        <MainComponent {...this.props}/>
      </div>
    )
  }
}

// reducer
const mapStateToProps = (state) => {
  return { 
    action: state.action,
  }
}

// function 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // loading action
    enableLoading, disableLoading,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
