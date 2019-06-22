import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Home from '../../admin/home/homeComponent';
import Dashboard from '../../admin/dashboard/dashboardComponent';

import './navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <div className='navigation'>
        <ul>
          <li><Link to={`${this.props.match.path}/dashboard`} className={(this.props.location.pathname.split('/')[2] === 'dashboard') ? 'active' : 'inactive'}>Dashboard</Link></li>
        </ul>
        <Route path={`${this.props.match.path}/dashboard`} component={Dashboard} />
      </div>
    );
  }
}

export default Navigation;