import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

  }

  onInputChange(event) {
  }

  onFormSubmit(event) {
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// mapDispatchToProps function

// connect mapping