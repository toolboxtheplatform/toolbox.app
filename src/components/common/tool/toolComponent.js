import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { newToolAction } from '../../../actions/tools';
import { getCookie } from '../../../utils/cookies';
import ToolView from './toolView';

class Application extends PureComponent {
  state = {
    tools: [],
    success: false,
    message: ''
  }

  onSubmitHandle = event => {
    event.preventDefault();
    const tool = event.target.tool.value;
    const link = event.target.link.value;

    this.props.dispatch(newToolAction({
      name: tool,
      link: `https://${link}`,
      userID: getCookie('userID'),
      admin: {
        userID: getCookie('userID'),
        role: getCookie('role')
      }
    }));
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.tools.hasOwnProperty('response')) {
      return {
        tools: nextProps.tools.response,
        success: nextProps.tools.response.success,
        message: nextProps.tools.response.messages
      }
    }

    return {
      tools: [],
      success: !prevProps.success,
      message: ''
    }
  }

  setTime() {
    setTimeout(() => {
      this.setState({
        success: false
      })
    }, 10000)
  }

  render() {
    if (!this.state.success) {
      this.setTime();
    }
    return(
      <ToolView 
        onSubmitHandle={this.onSubmitHandle.bind(this)}
        props={this.props}
        state={this.state}
      />
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Application);