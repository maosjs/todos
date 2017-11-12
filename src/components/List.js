import React, { Component } from 'react';



class List extends Component {
  constructor(props) {
    super(props);
  }


  render() {

let list=this.props.list.map((item) => {
  return(
     <li key={item.id}>{item.id} | {item.text} | {item.over.toString()} | {item.priority}</li>
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
