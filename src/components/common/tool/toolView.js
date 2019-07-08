import React from 'react';
import './tool.scss';

const ApplicationView = ({ props, onSubmitHandle, state }) => (
  <div className='container tool-container'>
    <ul className={(state.success) ? 'success' : 'errors'}>
      {
        (state.message !== '')
        ? state.message.map((error, index) => (
            <li key={index}>{`${error}`}</li>
          ))
        : ''
      }
    </ul>
    <form onSubmit={onSubmitHandle}>
      <div>
        <label htmlFor='tool'>Enter Tool Name</label>
        <input type='text' name='tool' id='tool' autoFocus placeholder='Enter Tool Name such as Jira, Conflunence, Trello, Facebook etc.' />
      </div>
      <div>
        <label htmlFor='link'>Enter Home Link</label>
        <input type='text' name='link' placeholder='Enter Link to Tool such as https://www.jira.com etc.' id='link' />
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  </div>
);

export default ApplicationView;