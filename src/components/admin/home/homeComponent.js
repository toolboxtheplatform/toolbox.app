import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  fetchToolsListAction,
  deleteToolAction
} from '../../../actions/admin';
import { getCookie } from '../../../utils/cookies';
import Card from '../../common/card/card';
import './home.scss';

class Home extends PureComponent {
  state = {
    list: [],
    isHover: false,
    success: true,
    message: '',
    isDelete: false,
    filteredTool: [],
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
    if (nextProps.deleteTool.hasOwnProperty('response')) {
      return {
        list: nextProps.deleteTool.response.tools,
        success: nextProps.deleteTool.response.success,
        message: nextProps.deleteTool.response.message,
        isDelete: false
      }
    }

    if (nextProps.list.hasOwnProperty('response')) {
      return {
        list: nextProps.list.response,
        success: true,
        message: '',
        isDelete: false
      }
    }

    return {
      list: [],
      success: true,
      message: ''
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
          <input className='input' type='text' name='search' placeholder='Search' onChange={this.search.bind(this)} />
        </div>
        <ul>
          {(this.state.filteredTool.length === 0)
            ?
            this.state.list.map(tool => (
              <Card key={tool._id} tool={tool} isHover={this.state.isHover} onDeleteHandle={this.onDeleteHandle.bind(this)} />
            ))
            :
            this.state.filteredTool.map(tool => (
              <Card key={tool._id} tool={tool} isHover={this.state.isHover} onDeleteHandle={this.onDeleteHandle.bind(this)} />
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Home);