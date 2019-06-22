import React from 'react';

const ApplicationView = ({ props, onSubmitHandle }) => (
  <div>
    <form onSubmit={onSubmitHandle}>
      <div>
        <label>Enter Application</label>
        <input type='text' name='application' placeholder='Enter Application Name such as Jira, Conflunence, Trello, Facebook etc' />
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  </div>
);

export default ApplicationView;