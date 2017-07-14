import React, { Component } from 'react';
import Players from './Players';

export default class Leaderboard extends Component {
    render() {
    	//disini bisa get dari API
    	const players = [
    		{ id:1, name:'Ganteng Banget', score:20},
    		{ id:2, name:'Yosi', score:30},
    		{ id:3, name:'Okky', score:50}
    	];

    	const styles = {
    		container: {
    			padding: 60
    		}
    	};

        return (
        	<div style={styles.container}>
            	<h1> Leaderboard </h1>
            	<Players members={players}/>
        	</div>
        );
    }
}

