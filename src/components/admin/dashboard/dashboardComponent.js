import React, { Component } from 'react';

class Dashboard extends Component {
  componentDidMount() {
    console.log('Mount');
  }

  componentWillUnmount() {
    console.log('Unmount');
  }

  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
}

export default Dashboard;
