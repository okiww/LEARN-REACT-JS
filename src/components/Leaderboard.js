import React, { Component } from 'react';
import Players from './Players';
import AddPlayer from './AddPlayer';
import Header from './Header';

export default class Leaderboard extends Component {
	constructor(props) {
		super(props);
    	const players = [
    		{ id:1, name:'Ganteng Banget', score:20},
    		{ id:2, name:'Yosi', score:30},
    		{ id:3, name:'Okky', score:50}
    	];

    	this.state = {
    		members : players
    	}

    	this.onPlayerAdd = this.onPlayerAdd.bind(this);
	}

	onPlayerAdd(name) {
		let new_members = this.state.members
		new_members.push({id: new_members.length + 1, name: name, score:10})

		this.setState({
			members : new_members
		})
	}

    render() {
    	//disini bisa get dari API
    	const styles = {
    		container: {
    			padding: 60,
    			borderRadius: '0.3rem 0.3rem 0px 0px',
			    display: 'block',
			    margin: '0 auto',
			    position: 'absolute',
			    top: '50%',
			    transform: 'translate(-50%, -50%)',
			    left: '50%',
			    maxHeight: '100%'
    		}
    	};

        return (
        	<div>
        		<div>
        			<Header />
        		</div>
	        	<div style={styles.container}>
	            	<h1> Leaderboard </h1>
	            	{/*  passing props members with value this.state.members*/}
	            	<Players members={this.state.members}/>
	            {/* get value from props onAdd and passing to function onPlayerAdd*/}
	            	<AddPlayer onAdd={this.onPlayerAdd}/>
	        	</div>
        	</div>
        );
    }
}

