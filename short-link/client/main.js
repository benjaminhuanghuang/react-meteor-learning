import React from 'react';
import ReactDOM  from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Router, Route, Switch } from 'react-router';

import Signup from '../imports/ui/signup';
import Login from '../imports/ui/login';
import Link from '../imports/ui/link';
import NotFound from '../imports/ui/notFound';


const routes=(
  <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/links" component={Link}/>
      <Route component={NotFound}/> 
      </Switch>
  </BrowserRouter>
);
Meteor.startup(function(){
  ReactDOM.render(routes, document.getElementById('app'));
});