import React, { Component } from 'react';
import List from './List';


class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }


  handleChange(e) {
    this.setState({search:e.target.value});
  }

  render() {
    return (
      <div>
        <input value={this.state.search} onChange={this.handleChange.bind(this)} />
        <List list={this.props.list}/>
      </div>
    );
  }
};

export default Filters;
