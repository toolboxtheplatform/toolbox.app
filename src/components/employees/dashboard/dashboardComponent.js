import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchToolsAction, deleteToolAction, fetchToolsListAction } from '../../../actions/admin';
import Card from '../../common/card/card';
import { getCookie } from '../../../utils/cookies';

import './dashboard.scss';

class Dashboard extends Component {
  state = {
    tools: [],
    loading: false,
    error: null,
    isHover: false,
    success: false,
    message: '',
    isDelete: false,
  }

  componentDidMount() {
    this.props.dispatch(fetchToolsListAction({
      userID: getCookie('userID'),
    }));
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.deleteTool.hasOwnProperty('response')) {
      return {
        tools: nextProps.deleteTool.response.tools,
        success: nextProps.deleteTool.response.success,
        message: nextProps.deleteTool.response.message,
        isDelete: false
      }
    }

    if (nextProps.list.hasOwnProperty('payload')) {
      return {
        loading: nextProps.employees.loading,
        tools: nextProps.list.payload,
        isDelete: false,
      }
    }

    return {
      tools: [],
      loading: false,
      message: '',
      success: false,
    }
  }

  onDeleteHandle(id) {
    this.setState({
      isDelete: true
    });
    this.props.dispatch(deleteToolAction({
      toolID: id,
      userID: getCookie('userID'),
      admin: {
        id: getCookie('userID'),
        role: getCookie('role')
      }
    }));
  }

  render() {
    if (this.state.loading) {
      return <div className='loading'>Loading...</div>
    }

    if (this.state.tools.length === 0) {
      return <div className='notfound'>No tools found to list them here.</div>
    }

    return (
      <div className='container dashboard-container'>
        <ul>
          {this.state.tools.map(tool => (
            <Card key={tool._id} tool={tool} isHover={this.state.isHover} onDeleteHandle={this.onDeleteHandle.bind(this)} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateFromProps = state => (state);

export default connect(mapStateFromProps)(Dashboard);
