import React from 'react';
import Button from '../../common/button/button';
import './tool.scss';

const ApplicationView = ({ props, onSubmitHandle, state }) => (
  <div className='container tool-container'>
    <ul className={(state.success) ? 'success' : 'errors'}>
      {
        (state.message !== '')
        ? state.message.map((error, index) => (
            <li key={index} className='success'>{`${error}`}</li>
          ))
        : ''
      }
    </ul>
    <form onSubmit={onSubmitHandle}>
      <div>
        <label htmlFor='tool'>Enter tool name
          <input className='input' type='text' name='tool' id='tool' autoFocus placeholder='Enter tool name such as Jira, Conflunence, Trello, Facebook etc.' />
        </label>
      </div>
      <div>
        <label htmlFor='link'>Enter url
          <span className='pre-link'>https://</span>
          <input type='text' className='input link-input' name='link' placeholder='Enter tool url such as jira.com etc if you enter Jira as tool name above.' id='link' />
        </label>
      </div>
      <div>
        <Button classList='btn normal' label='Save' />
      </div>
    </form>
  </div>
);

export default ApplicationView;