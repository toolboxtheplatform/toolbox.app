import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import { fetchToolsListAction } from '../../../actions/admin';
import { getCookie } from '../../../utils/cookies';
import './home.scss';

library.add(faTrashAlt, faEdit);

class Home extends PureComponent {
  state = {
    list: undefined
  }

  componentDidMount() {
    this.props.dispatch(fetchToolsListAction({
      admin: {
        userID: getCookie('userID'),
        role: getCookie('role')
      }
    }));
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.list.hasOwnProperty('response')) {
      return {
        list: nextProps.list.response
      }
    }

    return {
      list: undefined
    }
  }

  render() {
    if (this.state.list === undefined) {
      return <div className='loading'>Loadding...</div>
    }
    return(
      <div className='container list-container'>
        <ul>
          {this.state.list.map(tool => (
            <li className='logos-container' key={tool._id}>
              <button className='icon icon-delete'><FontAwesomeIcon icon='trash-alt' /></button>
              <button className='icon icon-edit'><FontAwesomeIcon icon='edit' /></button>
              <Link className={`${tool.className.toLowerCase().replace(' ', '-')} logos`} to={tool.homePage} target='_blank'>
                <span className='name'>{tool.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Home);