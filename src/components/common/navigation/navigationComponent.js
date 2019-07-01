import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Home from '../../admin/home/homeComponent';
import Dashboard from '../../employees/dashboard/dashboardComponent';
import Employees from '../../admin/employees/employeesComponent';
import Tool from '../tool/toolComponent';
import Profile from '../profile/profileComponent';
import { getCookie } from '../../../utils/cookies';

import './navigation.scss';

class Navigation extends Component {
  componentDidMount(){
    document.title = 'Toolbox';
  }
  
  render() {
    return (
      <div className='navigation'>
        <Link to='' className='nav-logo'></Link>
        {(getCookie('role') === 'Admin')
          ?
          <ul className='navitation-container'>  
            <li><Link to={`${this.props.match.path}/home`} className={(this.props.location.pathname.split('/')[2] === 'home') ? 'active' : 'inactive'}>Home</Link></li>
            <li><Link to={`${this.props.match.path}/employees`} className={(this.props.location.pathname.split('/')[2] === 'employees') ? 'active' : 'inactive'}>Employees</Link></li>
            <li><Link to={`${this.props.match.path}/app`} className={(this.props.location.pathname.split('/')[2] === 'app') ? 'active' : 'inactive'}>Add Tool</Link></li>
          </ul>
          :
          <ul className='navitation-container'>
            <li><Link to={`${this.props.match.path}/dashboard`} className={(this.props.location.pathname.split('/')[2] === 'dashboard') ? 'active' : 'inactive'}>Dashboard</Link></li>
            <li><Link to={`${this.props.match.path}/profile`} className={(this.props.location.pathname.split('/')[2] === 'profile') ? 'active' : 'inactive'}>Profile</Link></li>
            <li><Link to={`${this.props.match.path}/app`} className={(this.props.location.pathname.split('/')[2] === 'app') ? 'active' : 'inactive'}>Add Tool</Link></li>
          </ul>
        }
        <Route path={`${this.props.match.path}/home`} component={Home} />
        <Route path={`${this.props.match.path}/employees`} component={Employees} />
        <Route path={`${this.props.match.path}/app`} component={Tool} />
        <Route path={`${this.props.match.path}/dashboard`} component={Dashboard} />
        <Route path={`${this.props.match.path}/profile`} component={Profile} />
      </div>
    );
  }
}

export default Navigation;