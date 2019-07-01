import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { newToolAction } from '../../../actions/admin';

import ToolView from './toolView';

class Application extends PureComponent {
  state = {
    tools: undefined,
    success: undefined,
    message: undefined
  }

  onSubmitHandle = event => {
    event.preventDefault();
    const tool = event.target.tool.value;
    const link = event.target.link.value;

    this.props.dispatch(newToolAction({
      name: tool,
      link: link
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
      tools: undefined,
      success: undefined,
      message: undefined
    }
  }

  render() {
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