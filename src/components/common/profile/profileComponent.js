import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { employeeProfileAction } from '../../../actions/profile';
import { getCookie } from '../../../utils/cookies';
import EditProfile from './edit/editProfileComponent';
import './profile.scss';

class Profile extends Component {
  state = {
    profile: [],
    loading: false,
    error: null
  }

  componentDidMount() {
    this.props.dispatch(employeeProfileAction());
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.profile.hasOwnProperty('employee') || nextProps.update.hasOwnProperty('employee')) {
      for (let key in nextProps.profile.employee) {
        if (nextProps.update.employee.length === undefined && nextProps.profile.employee[key] !== nextProps.update.employee[key]) {
          return {
            profile: nextProps.update.employee,
            loading: nextProps.update.loading,
            error: nextProps.update.error
          }
        }
      }
      return {
        profile: nextProps.profile.employee,
        loading: nextProps.profile.loading,
        error: nextProps.profile.error
      }
    }

    return {
      profile: [],
      loading: false,
      error: null
    }
  }

  render() {
    if (this.state.loading) {
      return <div className='loading'>Loading...</div>
    }

    if (this.state.error) {
      return <div className='loading'>{this.state.error}</div>
    }

    const {
      name,
      email,
      profession,
      role,
      username,
      _id
    } = this.state.profile;

    return (
      <div className='container profile-container'>
        <table>
          <tbody>
            <tr>
              <th>Name</th><td className='uppercase'>{name}</td>
            </tr>
            <tr>
              <th>Email</th><td className=''>{email}</td>
            </tr>
            <tr>
              <th>Profession</th><td className='uppercase'>{profession}</td>
            </tr>
            <tr>
              <th>Role</th><td>You are <span>{role}</span></td>
            </tr>
            <tr>
              <th>Username</th><td>{username}</td>
            </tr>
            <tr>
              <th>Password</th><td></td>
            </tr>
            <tr>
              <th></th><td><Link to={`${this.props.match.path}/edit/${_id}`}>Edit</Link></td>
            </tr>
          </tbody>
        </table>
        <Route path={`${this.props.match.path}/edit/:id`} component={EditProfile} />
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Profile);