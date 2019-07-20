import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeProfileAction } from '../../../actions/profile';
import { getCookie } from '../../../utils/cookies';

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
    if (nextProps.profile.hasOwnProperty('employee')) {
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
    return (
      <div className='container profile-container'>
        <table>
          <tbody>
            <tr>
              <th>Name</th><td className='uppercase'>{this.state.profile.name}</td>
            </tr>
            <tr>
              <th>Email</th><td className=''>{this.state.profile.email}</td>
            </tr>
            <tr>
              <th>Profession</th><td className='uppercase'>{this.state.profile.profession}</td>
            </tr>
            <tr>
              <th>Role</th><td>You are {this.state.profile.role}</td>
            </tr>
            <tr>
              <th>Username</th><td>{this.state.profile.username}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Profile);