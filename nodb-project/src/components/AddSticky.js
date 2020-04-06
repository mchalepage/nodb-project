import React, {Component} from 'react'
import '../App.css'

class AddSticky extends Component {
    constructor(){
        super()
        this.state = {
            buttonClicked: false
        }
        this.handleAddSticky = this.handleAddSticky.bind(this)
    }

    handleAddSticky(){
        const newSticky = {
            contents: 'Type something...',
        }
        this.props.makeSticky(newSticky)
    }

    render(){
        return (
            <button onClick={this.handleAddSticky}>+</button>
        )
    }
}

export default AddSticky