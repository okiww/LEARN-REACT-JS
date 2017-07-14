import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
    	const styles = {
    		container: {
    			padding: 20,
    			backgroundColor: '#7BC3C0',
    			height: 50
    		},
    		handmark: {
    			float: 'right',
    			marginRight: 50
    		}
    	}

        return (
        	<div style={styles.container}>
	            <p className="App-footer" style={styles.handmark}>
	              {this.props.title}
	            </p>
        	</div>
        );
    }
}

