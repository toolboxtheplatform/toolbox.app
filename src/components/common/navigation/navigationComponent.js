import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Home from '../../admin/home/homeComponent';
import Dashboard from '../../admin/dashboard/dashboardComponent';
import Application from '../../admin/application/applicationComponent';

import './navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <div className='navigation'>
        <ul>
          <li><Link to={`${this.props.match.path}/dashboard`} className={(this.props.location.pathname.split('/')[2] === 'dashboard') ? 'active' : 'inactive'}>Dashboard</Link></li>
          <li><Link to={`${this.props.match.path}/add`} className={(this.props.location.pathname.split('/')[2] === 'add') ? 'active' : 'inactive'}>Add Employee</Link></li>
          <li><Link to={`${this.props.match.path}/app`} className={(this.props.location.pathname.split('/')[2] === 'app') ? 'active' : 'inactive'}>Add Application</Link></li>
        </ul>
        <Route path={`${this.props.match.path}/dashboard`} component={Dashboard} />
        <Route path={`${this.props.match.path}/app`} component={Application} />
      </div>
    );
  }
}

export default Navigation;