import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
  }

 render() {
  let fltrlist;
  if(this.props.search  !== '') {
    fltrlist = this.props.list.filter((item) => {
      return item.text.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1
    });
  } else {
    fltrlist = this.props.list;
  }
  let list = fltrlist.map((item) => {
    return (
      <li key={item.id}> {item.id} | {item.text} | {item.over.toString()} | {item.priority} </li>
    )
  });

  return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default List;
