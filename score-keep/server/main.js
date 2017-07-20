import { Meteor } from 'meteor/meteor';

import { add } from '../imports/math';

console.log();

Meteor.startup(() => {
  // code to run on server at startup
});

console.log(add(3,5));