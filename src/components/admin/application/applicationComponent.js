import React, { Component } from 'react';
import { connect } from 'react-redux';

import ApplicationView from './applicationView';

class Application extends Component {
  onSubmitHandle = event => {
    event.preventDefault();
    const application = event.target.application.value;
  }

  render() {
    return(
      <ApplicationView 
        onSubmitHandle={this.onSubmitHandle.bind(this)}
        props={this.props}
      />
    );
  }
}

export default Application;