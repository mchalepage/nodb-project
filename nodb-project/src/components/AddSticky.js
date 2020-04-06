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
            contents: 'Click to add a task...',
        }
        this.props.makeSticky(newSticky)
    }

    render(){
        return (
            <div className="add-sticky-div">
                <button className="add-sticky-button" onClick={this.handleAddSticky}>+</button>
            </div>
        )
    }
}

export default AddSticky