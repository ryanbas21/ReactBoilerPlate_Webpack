var React = require('react');
var ReactDOM = require('react-dom');


var objOne = {
    name: 'Ryan',
    location: 'Colorado'
}
var objTwo = {
    age: 24,
    ...objOne
};
console.log(objTwo);
ReactDOM.render(
  <h1>BoilerPlate app!</h1>,
  document.getElementById('app')
);
