import React, { Component } from 'react';
import { choice }  from './helpers.js'
import './Box.css'

export default class Box extends Component {
    static defaultProps = {
        allColors: ['aqua' , 'cyan',
            'fuchsia' , 'magenta',
            'darkgray'  ,'darkgrey',
            'darkslategray'  ,'darkslategrey',
            'dimgray' , 'dimgrey',
            'lightgray' , 'lightgrey',
            'lightslategray' , 'lightslategrey',
            'gray' , 'grey',
            'slategray' , 'slategrey']
    }

    state = {
        color: choice(this.props.allColors)
    }

    pickColor (){
        let newColor;
        do {
            newColor = choice(this.props.allColors);
        } while (newColor === this.state.color)

        this.setState({
            color: newColor
        })
    }

    handleClick = () => {
        this.pickColor();
    }

    render() {
        return (
            <div className="Box" style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}/>
        );
    }
}