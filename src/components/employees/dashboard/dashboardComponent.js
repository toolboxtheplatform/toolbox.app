import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import { deleteToolAction, fetchToolsListAction } from '../../../actions/tools';
import Card from '../../common/card/card';
import { getCookie } from '../../../utils/cookies';
import EditTool from '../../common/tool/editTool/editToolComponent';
import PropTypes from 'prop-types';

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
    filteredTool: [],
  }

  static contextTypes = {
    router: PropTypes.object,
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
        isDelete: false,
      }
    }

    if (nextProps.updateTool.hasOwnProperty('payload') && nextProps.updateTool.payload.length > 0) {
      return {
        tools: nextProps.updateTool.payload,
        error: nextProps.updateTool.error,
        loading: nextProps.updateTool.loading,
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
      isDelete: true,
    });
    this.props.dispatch(deleteToolAction({
      toolID: id,
      userID: getCookie('userID'),
      admin: {
        id: getCookie('userID'),
        role: getCookie('role'),
      },
    }));
  }

  onEditHandle(tool) {
    this.context.router.history.push(`/employee/dashboard/edit/${tool._id}/${tool.name}/${tool.homePage.split(':')[1].split('/')[2]}`);
  }

  search(event) {
    let filtered = [];
    this.state.tools.filter(async tool => {
      if (tool.name.toLowerCase().includes(event.target.value)) {
        filtered.push(tool);
        await this.setState(prevState => {
          return {
            filteredTool: filtered,
          }
        });
      }
    });
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
        <div className='form'>
          <input className='input' type='text' name='search' placeholder='Search' onChange={this.search.bind(this)} autoFocus />
        </div>
        <ul>
          {(this.state.filteredTool.length === 0)
            ?
            this.state.tools.map(tool => (
              <Card key={tool._id} tool={tool} isHover={this.state.isHover} onEditHandle={this.onEditHandle.bind(this)} onDeleteHandle={this.onDeleteHandle.bind(this)} />
            ))
            :
            this.state.filteredTool.map(tool => (
              <Card key={tool._id} tool={tool} isHover={this.state.isHover} onEditHandle={this.onEditHandle.bind(this)} onDeleteHandle={this.onDeleteHandle.bind(this)} />
            ))
          }
        </ul>
        <Route path={`${this.props.match.path}/edit/:id/:name/:link`} component={EditTool} />
      </div>
    );
  }
}

const mapStateFromProps = state => (state);

export default connect(mapStateFromProps)(Dashboard);
