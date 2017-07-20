import React from 'react';
import ReactDOM  from 'react-dom';
import { Meteor } from 'meteor/meteor';

Meteor.startup(function(){
  let jsx = <p> hello </p>;
  ReactDOM.render(jsx, document.getElementById('app'));
});