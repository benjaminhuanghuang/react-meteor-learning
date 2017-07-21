import React from 'react';
import PropTypes from 'prop-types';

import FlipMove from  'react-flip-move';

import { Players } from '../api/players';
import Player from './player';

export default class PlayerList extends React.Component{
    renderPlayers() {
        if (this.props.players.length ===0 )
        {
            return (
                <div className="item">
                    <p className="item__message">Add your player.</p>
                </div>
            );
        }
        return this.props.players.map((player)=>{
            return <Player key={player._id} player={player}/>;
        });
    }   

    render(){
        return (
            <div>
                <FlopMove>
                    {this.renderPlayers()}
                </FlopMove>
            </div>
        );
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}