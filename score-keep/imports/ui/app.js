import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './titleBar';
import AddPlayer from './addPlayer';
import PlayerList from './playerList';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <TitleBar title={this.props.title} subtitle="Created by Benjamin"/>
                <div className="wrapper">
                    <PlayerList players={this.props.players}/>
                    <AddPlayer score={10}/>
                </div>
            </div>
        );
    }
}

App.propTypes ={
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
}