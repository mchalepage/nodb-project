import React, {Component} from 'react'
import '../App.css'

class Sticky extends Component {
    constructor(){
        super()
        this.state = {
            isEditing: false,
            userInput: '',
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSaveContents = this.handleSaveContents.bind(this)
    }
    toggleEdit(){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange(event){
        this.setState({
            userInput: event.target.value
        })
    }

    handleSaveContents(){
        this.props.editSticky(this.props.sticky.id, this.state.userInput)
        this.toggleEdit()
    }

    render(){
        return(
            <div className="individual-sticky">
                <div className="delete-sticky-div">
                    <button
                    className="delete-sticky-button"
                    onClick={() => this.props.deleteSticky(this.props.sticky.id)}
                    >
                    X
                    </button>
                </div>

                {this.state.isEditing ? (
                    <div className='editing-sticky-div'>
                        <input 
                        placeholder="Enter task here..."
                        onChange={this.handleChange}
                        className="task-input"
                         />
                        <div className="cancel-and-save-buttons-div">
                            <button className="cancel-button" onClick={this.toggleEdit}>Cancel</button>
                            <button className="save-button" onClick={this.handleSaveContents}>Save</button>
                        </div>
                    </div>
                ):(
                    <div className="sticky-contents-div">
                    <p 
                    className="sticky-contents"
                    onClick={this.toggleEdit}
                    >
                    {this.props.sticky.contents}
                    </p>
                    </div>
                )}
            </div>
        )
    }
}

export default Sticky