const React = require('react');
const reactdom = require('react-dom');

const App = () => {
  return (
    <h1>This is from react.</h1>
  );
};

let root = document.getElementById('app');
reactdom.render(<App />,root);


console.log("Hey i'm in chrome browser console");
