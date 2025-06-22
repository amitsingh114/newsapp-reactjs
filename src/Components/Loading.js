import React, { Component } from 'react';
import loading from '../loading.gif'; // Adjust the path based on the location of loading.gif
import './Loading.css';
export default class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <img src={loading} alt="loading spinner" />
      </div>
    );
  }
}
