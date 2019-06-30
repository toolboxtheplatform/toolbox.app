import React from 'react';
import './tool.scss';

const ApplicationView = ({ props, onSubmitHandle, state }) => (
  <div className='container tool-container'>
    <div className={(state.success) ? 'success' : 'error'}>{state.message}</div>
    <form onSubmit={onSubmitHandle}>
      <div>
        <label htmlFor='tool'>Enter Tool Name</label>
        <input type='text' name='tool' id='tool' placeholder='Enter Tool Name such as Jira, Conflunence, Trello, Facebook etc' />
      </div>
      <div>
        <label htmlFor='link'>Enter Home Link</label>
        <input type='text' name='link' placeholder='Enter Link' id='link' />
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  </div>
);

export default ApplicationView;