import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
          score: this.props.score
        }
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    }

    plus(e) {
        this.setState({
            score: this.state.score + 10
        });
    }

    minus(e) {
        if (this.state.score === 0) {
            alert('Tidak bisa dikurang lagi')
        } else {
            this.setState({
                score: this.state.score - 10
            });
        }
    }

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
                    {/* call props name*/}
                    {this.props.name}
                </div>     
                <div style={styles.playScore}>
                    <div>
                        <Button outline color="success" onClick={this.minus} style={styles.button}>-</Button>
                        <span style={styles.score}>{this.state.score}</span>
                        <Button outline color="success" onClick={this.plus} style={styles.button}>+</Button>
                    </div>     
                </div>
            </div>
        );
    }
}

