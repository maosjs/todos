import React, {Component} from 'react';
import Create_item from './Create_item';
import Filters from './Filters';
import list from '../list.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lst: list
    }
  }

  add(item) {
    let items = [...this.state.lst, {id:this.state.lst[this.state.lst.length-1].id+1, text: item, over: false, priority: 1}];
    this.setState({lst: items})
  }

  render() {
    return (
      <div>
        <Create_item additem={this.add.bind(this)}/>
        <Filters list={this.state.lst}/>
      </div>
    );
  }
}

export default App;
