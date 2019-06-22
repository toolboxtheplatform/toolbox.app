import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Home from '../../admin/home/homeComponent';
import Dashboard from '../../admin/dashboard/dashboardComponent';

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to={`${this.props.match.path}/dashboard`}>Dashboard</Link></li>
        </ul>
        <Route path={`${this.props.match.path}/dashboard`} component={Dashboard} />
      </div>
    );
  }
}

export default Navigation;