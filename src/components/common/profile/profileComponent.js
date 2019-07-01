import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCookie } from '../../../utils/cookies';

class Profile extends Component {
  render() {
    return (
      <div className='container profile-container'>Profile</div>
    );
  }
}

export default Profile;