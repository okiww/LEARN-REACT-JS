import React, { Component } from 'react';

export default class Header extends Component {
    render() {
    	const styles = {
    		container: {
    			padding: 10,
    			backgroundColor: '#7BC3C0'
    		},
    		title: {
    			marginLeft: 400
    		}
    	}

        return (
            <div style={styles.container} className="App-header">
              <h2 style={styles.title}>Simple WebAPPs</h2>
            </div>
        );
    }
}

