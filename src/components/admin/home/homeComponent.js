import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchToolsListAction } from '../../../actions/admin';

import './home.scss';

class Home extends PureComponent {
  state = {
    list: undefined
  }

  componentDidMount() {
    this.props.dispatch(fetchToolsListAction());
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
    console.log(this.state.list);
    if (this.state.list === undefined) {
      return <div className='loading'>Loadding...</div>
    }
    return(
      <div className='container list-container'>
        <ul>
          {this.state.list.map(tool => (
            <Link to={tool.homePage} target='_blank'>
              <li key={tool._id}>
                <img src={tool.logoPath} />
                {tool.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Home);