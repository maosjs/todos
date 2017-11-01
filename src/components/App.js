import React from 'react';

import Header from './Header';
import Create_item from './Create_item';
import Counter from './Counter';
import List from './List';
import Update_item from './Update_item';
import Delete_item from './Delete_item';

const App = () => {
  return (
    <div className={"container"}>
      <h1>This is the App components Container.</h1>
      <hr />
        <Header />
        <Create_item />
        <Counter />
        <List />
        <Update_item />
        <Delete_item />
      <hr />
    </div>
  );
};

export default App;
