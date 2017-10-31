import React from 'react';

import Header from './Header';
import Create_item from './Create_item';
import Counter from './Counter';
import List from './List';
import List_item from './List_item';
import Update_item from './Update_item';
import Delete_item from './Delete_item';

const App = () => {
  return (
    <div>
      <h1>This is a main App components Container.</h1>
      <hr />
      <Header />
      <Create_item />
      <Counter />
      <List />
      <List_item />
      <Update_item />
      <Delete_item />
      <hr />
    </div>
  );
};

export default App;
