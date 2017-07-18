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
                "paddingTop":"4.4rem",
                "zIndex":"10",
                "backgroundColor":"red",
                "paddingBottom":"0px"
            },
            cont: {
                flex:"1 1 0%"
            },
    		main: {
    			padding: 60,
    			borderRadius: '0.3rem 0.3rem 0px 0px',
			    display: 'block',
			    margin: '0 auto',
			    position: 'absolute',
			    top: '50%',
			    transform: 'translate(-50%, -50%)',
			    left: '50%',
			    maxHeight: '100%',
                maxWidth: '60%',
                marginLeft: '10px'
    		}
    	};

        return (
            <div>
                <div style={styles.container}>
                    <span>
                    	<div style={styles.cont}>
                    		<Header />
            	        	<div style={styles.main}>
            	            	<h1> Leaderboard </h1>
            	            	
            	            	<Players members={this.state.members}/>
            	          
            	            	<AddPlayer onAdd={this.onPlayerAdd}/>
            	        	</div>
                    	</div>
                    </span>
                </div>
            </div>
        );
    }
}

