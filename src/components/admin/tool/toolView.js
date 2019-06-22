import React from 'react';

const ApplicationView = ({ props, onSubmitHandle, state }) => (
  <div>
    <div className={(state.success) ? 'success' : 'error'}>{state.message}</div>
    <form onSubmit={onSubmitHandle}>
      <div>
        <label>Enter Application</label>
        <input type='text' name='tool' placeholder='Enter Application Name such as Jira, Conflunence, Trello, Facebook etc' />
      </div>
      <div>
        <label>Enter Home Link</label>
        <input type='text' name='link' placeholder='Enter Link' />
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  </div>
);

export default ApplicationView;