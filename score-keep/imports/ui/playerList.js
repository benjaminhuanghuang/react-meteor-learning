import React from 'react';
import PropTypes from 'prop-types';

import { Players } from '../api/players';
import Player from './player';

export default class PlayerList extends React.Component{
    renderPlayers() {
        if (this.props.players.length ===0 )
        {
            return <p>Add your player.</p>;
        }
        return this.props.players.map((player)=>{
            return <Player key={player._id} player={player}/>;
        });
    }   

    render(){
        return (
            <div>
                {this.renderPlayers()}
            </div>
        );
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}