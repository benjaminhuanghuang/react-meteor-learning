import React from 'react';
import ReactDOM  from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayerPositions } from '../imports/api/players';
import App from '../imports/ui/app';

Meteor.startup(function(){
    Tracker.autorun(function(){
        let players = Players.find({}, {sort: {score: -1}}).fetch();
        let positionedPlayer = calculatePlayerPositions(players);
        let title = "Score keep";
        let name = 'Mike';
        ReactDOM.render(<App title={title} players={positionedPlayer}/>, document.getElementById('app'));
    });
});