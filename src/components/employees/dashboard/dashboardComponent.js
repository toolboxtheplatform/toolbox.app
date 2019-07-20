import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchToolsAction } from '../../../actions/admin';
import { Link } from 'react-router-dom';

import './dashboard.scss';

class Dashboard extends Component {
  state = {
    tools: [],
    loading: false,
    error: null
  }

  componentDidMount() {
    this.props.dispatch(fetchToolsAction());
  }

  componentWillUnmount() {
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.employees.hasOwnProperty('tools')) {
      return {
        loading: nextProps.employees.loading,
        tools: nextProps.employees.tools
      }
    }

    return {
      tools: [],
      loading: false
    }
  }

  render() {
    if (this.state.loading) {
      return <div className='loading'>Loading...</div>
    }

    if (!this.state.tools) {
      return <div className='loading'>No tools found to list them here.</div>
    }

    return (
      <div className='container dashboard-container'>
        <ul>
          {this.state.tools.map(tool => (
            <li key={tool._id}>
              <a className={`${tool.toolName.toLowerCase()} logos`} href={tool.toolName} target='_blank'>
                <span className='name'>{`${tool.toolName.charAt(0).toUpperCase()}${tool.toolName.slice(1).replace('-', ' ')}`}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateFromProps = state => (state);

export default connect(mapStateFromProps)(Dashboard);
