import React from 'react';
import { Players } from '../api/players';

export default class AddPlayer extends React.Component{
    // handleSubmit(e) { }  lose "this" bounding and cause error 
    // be be fixed by using onSubmit={this.handleSubmit.bind(this)}
    handleSubmit= (e)=>{
        let playerName = e.target.playerName.value;
        e.preventDefault();
        if(playerName)
        {
            e.target.playerName.value='';
            Players.insert({
                name: playerName,
                score : this.props.score
            });
        }
    }
  render(){
    return (
       <div className="item">
           {this.props.children}
            <form className="form" onSubmit={this.handleSubmit}>
            <input className="form__input" type="text" name="playerName" placeholder = "Player name"/>
            <button className="button"> Add Player </button>
            </form>
        </div>
    )
  }
}