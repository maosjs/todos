import React, { Component } from 'react';

class Create_item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    this.setState({value : e.target.value})
  }

  handleClick() {
    this.props.additem(this.state.value)
    this.setState({value: ''})
  }

  render() {
    return (
      <div>
        <label>Enter Text </label>
        <input
          placeholder="Enter item"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleClick.bind(this)}>ADD</button>
      </div>
    );
  };
};

export default Create_item;
