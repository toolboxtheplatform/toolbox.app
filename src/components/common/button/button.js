import React, { Component, Fragment } from 'react';
import './button.scss';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <button className={this.props.classList}>{this.props.label}</button>
      </Fragment>
    );
  }
}

export default Button;