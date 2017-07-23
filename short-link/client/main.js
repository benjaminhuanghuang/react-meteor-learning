import React from 'react';
import ReactDOM  from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Router, Route, browserHistory } from 'react-router';

import Signup from '../imports/ui/signup';
import Link from '../imports/ui/link';

const routes=(
  <Router history={browserHistory}>
    <Route path="/signup" component={Signup}/>
  </Router>
);

Meteor.startup(function(){
    Tracker.autorun(function(){
        ReactDOM.render(<Signup/>, document.getElementById('app'));
    });
});