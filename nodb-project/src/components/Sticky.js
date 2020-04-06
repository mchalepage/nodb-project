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
                    <div>
                        <input 
                        placeholder={this.props.sticky.contents}
                        onChange={this.handleChange} />
                        <button onClick={this.toggleEdit}>Cancel</button>
                        <button onClick={this.handleSaveContents}>Save</button>
                    </div>
                ):(
                    <p 
                    className="sticky-contents"
                    onDoubleClick={this.toggleEdit}
                    >
                    {this.props.sticky.contents}
                    </p>
                )}
            </div>
        )
    }
}

export default Sticky