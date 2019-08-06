import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './card.scss';

library.add(faTrashAlt, faEdit);

class Card extends Component {
  state = {
    isHover: false,
  }

  onMouseOver() {
    this.setState({
      isHover: true,
    });
  }

  onMouseOut() {
    this.setState({
      isHover: false,
    });
  }

  onEditHandle(tool) {
    this.props.onEditHandle(tool);
  }

  onDeleteHandle(id) {
    this.props.onDeleteHandle(this.props.tool._id);
  }

  render() {
    return (
      <li className='logos-container card' onMouseEnter={this.onMouseOver.bind(this)} onMouseLeave={this.onMouseOut.bind(this)}>
        <button 
          className={(this.state.isHover) ? 'icon icon-delete hovered' : 'icon icon-delete unhovered'}
          onClick={this.onDeleteHandle.bind(this)}><FontAwesomeIcon icon='trash-alt'/>
        </button>

        <button 
          className={(this.state.isHover) ? 'icon icon-edit hovered' : 'icon icon-edit unhovered'} 
          onClick={this.onEditHandle.bind(this, this.props.tool)}><FontAwesomeIcon icon='edit' />
        </button>

        <a className={`${this.props.tool.className.toLowerCase().replace(' ', '-')} logos`} href={this.props.tool.homePage} target='_blank' rel='noopener noreferrer'>
          <span className='name'>{this.props.tool.name}</span>
        </a>
      </li>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Card);
