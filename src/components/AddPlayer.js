import React, { Component } from 'react';

export default class AddPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ""
        }
        this.onPlayerChanger = this.onPlayerChanger.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
    }

    //this function for grab value when input
    onPlayerChanger(e) {
        this.setState({
            name: e.target.value
        });
    }

    //this function create new props onAdd
    addPlayer(e) {
        this.props.onAdd(this.state.name)
    }

    render() {

        const styles = {
            container : {
                padding : 10
            },
            input : {
                flex : 1,
                paddingRight: 20,
                width: '45%',
                height: 27
            },
            button : {
                float : 'right',
                marginRight: 80,
                width: 180,
                padding: 10
            }
        }

        return (
        	<div style={styles.container}>
            	<input onChange={this.onPlayerChanger} value={this.state.name} type="text" placeholder="input player name" style={styles.input} />
            	<button onClick={this.addPlayer} style={styles.button}>Add Player</button>
        	</div>
        );
    }
}
