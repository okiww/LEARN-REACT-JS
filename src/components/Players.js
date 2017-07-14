import React, { Component } from 'react';
import Player from './Player';

export default class Players extends Component {
    render() {
        return (
             <div>
         		{this.props.members.map( (player) => {
         			return (
         				/*create prop key, name, score*/
		             	<Player key={player.id} name={player.name} score={player.score} />
         			)
         		})}
             </div>
        );
    }
}

