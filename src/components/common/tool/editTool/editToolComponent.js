import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../common/button/button';
import { getCookie } from '../../../../utils/cookies';
import { updateToolAction } from '../../../../actions/tools';
import './editTool.scss';

class EditTool extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  close() {
    if (getCookie('role') === 'Admin') {
      this.context.router.history.push(`/admin/home/`);
    } else {
      this.context.router.history.push(`/employee/dashboard/`);
    }
  }

  updateTool(event) {
    event.preventDefault();
    let updateTool = {
      name: event.target.tool.value,
      link: `https://${event.target.link.value}`,
      id: this.props.match.params.id,
      userID: getCookie('userID'),
    };

    if (getCookie('role') === 'Admin') {
      updateTool['admin'] = {};
      updateTool['admin']['role'] = getCookie('role');
      updateTool['admin']['userID'] = getCookie('userID');
    }

    this.props.dispatch(updateToolAction(updateTool));
    this.close();
  }

  render() {
    const {
      name, link,
    } = this.props.match.params;
    return (
      <div className='edit-tool-container'>
        <div className='backdrop' onClick={this.close.bind(this)}></div>
        <div>
          <form onSubmit={this.updateTool.bind(this)}>
            <div>
              <label htmlFor='tool'>Update name of {name}
                <input className='input' type='text' name='tool' id='tool' autoFocus defaultValue={name} />
              </label>
            </div>
            <div>
              <label htmlFor='link'>Enter {name}'s url
                <span className='pre-link'>https://</span>
                <input type='text' className='input link-input' name='link' defaultValue={link} id='link' />
              </label>
            </div>
            <div>
              <Button classList='btn normal' label='Update' />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateFromProps = state => (state);

export default connect(mapStateFromProps)(EditTool);