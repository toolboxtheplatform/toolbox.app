import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {
  fetchToolsListAction,
  deleteToolAction,
} from '../../../actions/tools';
import { getCookie } from '../../../utils/cookies';
import Card from '../../common/card/card';
import PropTypes from 'prop-types';
import EditTool from '../../common/tool/editTool/editToolComponent';
import './home.scss';

class Home extends PureComponent {
  state = {
    list: [],
    isHover: false,
    success: true,
    message: '',
    isDelete: false,
    loading: false,
    error: null,
    filteredTool: [],
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  componentDidMount() {
    this.props.dispatch(fetchToolsListAction({
      admin: {
        userID: getCookie('userID'),
        role: getCookie('role'),
      },
    }));
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.deleteTool.hasOwnProperty('response')) {
      return {
        list: nextProps.deleteTool.response.tools,
        success: nextProps.deleteTool.response.success,
        message: nextProps.deleteTool.response.message,
        isDelete: false,
      }
    }

    if (nextProps.updateTool.hasOwnProperty('payload') && nextProps.updateTool.payload.length > 0) {
      return {
        list: nextProps.updateTool.payload,
        loading: nextProps.updateTool.loading,
        message: nextProps.updateTool.error,
        isDelete: false,
      }
    }

    if (nextProps.list.hasOwnProperty('payload')) {
      return {
        list: nextProps.list.payload,
        success: true,
        message: '',
        isDelete: false,
      }
    }

    return {
      list: [],
      success: true,
      message: '',
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
        role: getCookie('role'),
      },
    }));
  }

  onEditHandle({ _id, name, homePage }) {
    this.context.router.history.push(`/admin/home/edit/${_id}/${name}/${homePage.split(':')[1].split('/')[2]}`);
  }

  search(event) {
    let filtered = [];
    this.state.list.filter(async tool => {
      if (tool.name.toLowerCase().includes(event.target.value)) {
        filtered.push(tool);
        await this.setState((prevState) => {
          return {
            filteredTool: filtered,
          }
        });
      }
    });
  }

  render() {
    if (this.state.list === undefined || this.state.list.length === 0) {
      return <div className='loading'>Loading...</div>
    }

    return(
      <div className='container list-container'>
        <div className='form'>
          <input
            className='input'
            type='text'
            name='search'
            placeholder='Search'
            onChange={this.search.bind(this)}
            autoFocus
          />
        </div>
        <ul>
          {(this.state.filteredTool.length === 0)
            ?
            this.state.list.map(tool => (
              <Card
                key={tool._id}
                tool={tool}
                isHover={this.state.isHover}
                onEditHandle={this.onEditHandle.bind(this)}
                onDeleteHandle={this.onDeleteHandle.bind(this)}
              />
            ))
            :
            this.state.filteredTool.map(tool => (
              <Card
                key={tool._id}
                tool={tool}
                isHover={this.state.isHover}
                onEditHandle={this.onEditHandle.bind(this)}
                onDeleteHandle={this.onDeleteHandle.bind(this)}
              />
            ))
          }
        </ul>
        <Route
          path={`${this.props.match.path}/edit/:id/:name/:link`}
          component={EditTool}
        />
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Home);