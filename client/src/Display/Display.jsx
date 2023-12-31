import { Component } from 'react'
import './Display.scss'

export default class Display extends Component { 
    render() {
        return (
            <div className="display">
                <p>{this.props.quote}</p>
                <p className="author">- {this.props.author}</p>
            </div>
        )
    }
}