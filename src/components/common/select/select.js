import React, { Component } from 'react';
import './select.scss';

class Select extends Component {
  state = {
    isHidden: true,
    children: [],
    listChildren: [],
    placeholder: '',
    active: false
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      children: [...this.refs.select.children],
      placeholder: this.refs.select.children[0].value
    });
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick.bind(this), false);
  }

  handleClick(event) {
    if (this.node == null || !this.node.contains(event.target)) {
      this.setState({
        active: false
      });
      return;
    }
  }

  onToggleDropdown() {
    if (this.state.active) {
      this.setState({
        active: false
      });
    } else {
      this.setState({
        active: true
      });
    }
  }

  onSelectOption(event) {
    this.setState({
      placeholder: event.target.innerText,
      active: !this.state.active
    });
  }

  render() {
    return (
      <div className='select' ref={node => this.node = node}>
        <select className={(this.state.isHidden) ? 'hidden' : ''} ref='select'>
          <option ref='option'>Select Role Administrator or Employee</option>
          {this.props.options.map(option => (
            <option key={option.value} value={option.value} ref={option.value}>{option.text}</option>  
          ))}
        </select>  
        <input
          className='styledSelect input default'
          name={this.props.name}
          autoComplete='off'
          ref='placeholder'
          id={this.props.id}
          onClick={this.onToggleDropdown.bind(this)}
          defaultValue={this.state.placeholder} />
        <ul className={(this.state.active) ? 'options show' : 'options hide'}>
          {this.state.children.map(li => (
            <li 
              key={li.value} 
              value={li.value} 
              className={(li.value === 'Admin') ? 'labels primary' : (li.value === 'Employee') ? 'labels other' : 'labels none'} 
              onClick={this.onSelectOption.bind(this)}>{li.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Select;
