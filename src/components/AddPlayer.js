import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

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
                padding : 10,
            },
            input : {
                flex : 1,
                paddingRight: 20,
                width: '70%',
                height: 27,
                boderColor: '#6380b3'
            },
            button : {
                className: 'btn btn-primary',
                float : 'right',
                marginRight: 68,
                marginTop: 5,
                width: 100,
                padding: 10
            }
        }

        return (
        	<div style={styles.container}>
            	<input onChange={this.onPlayerChanger} value={this.state.name} type="text" placeholder="input player name" style={styles.input} />
                <br />
            	<Button type="button" color="danger" className="" onClick={this.addPlayer} style={styles.button}>Add Player</Button>
        	</div>
        );
    }
}
