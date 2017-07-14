import React, { Component } from 'react';

export default class Player extends Component {
    render() {
        const styles = {
            player : {
                display : 'flex',
                padding : 10
            },
            name : {
                flex : 1
            },
            playScore : {
                width : 200
            },
            score : {
                padding : 20
            },
            button : {
                padding : 10
            }
        }
        return (
             <div style={styles.player}>
                <div style={styles.name}>
                    {this.props.name}
                </div>     
                <div style={styles.playScore}>
                    <div>
                        <button style={styles.button}>-</button>
                        <span style={styles.score}>{this.props.score}</span>
                        <button style={styles.button}>+</button>
                    </div>     
                </div>
             </div>
        );
    }
}

