import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchToolsAction } from '../../../actions/admin';
import { Link } from 'react-router-dom';

import './dashboard.scss';

class Dashboard extends Component {
  state = {
    tools: []
  }

  componentDidMount() {
    this.props.dispatch(fetchToolsAction());
  }

  componentWillUnmount() {
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.employees.hasOwnProperty('response')) {
      return {
        tools: nextProps.employees.response
      }
    }

    return {
      tools: []
    }
  }

  render() {
    if (this.state.tools.length === 0) {
      return <div className='loading'>Loading...</div>
    }

    return (
      <div className='container dashboard-container'>
        <ul>
          {this.state.tools.map(tool => (
            <li key={tool._id}>
              <Link className={`${tool.toolName.toLowerCase()} logos`} to={tool.toolName} target='_blank'>
                <span className='name'>{`${tool.toolName.charAt(0).toUpperCase()}${tool.toolName.slice(1).replace('-', ' ')}`}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateFromProps = state => (state);

export default connect(mapStateFromProps)(Dashboard);
