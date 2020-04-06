import React from 'react'
import Sticky from './Sticky'
import '../App.css'

function Stickies(props){
    const stickiesList = props.allStickies.map(sticky => {
        return (
            <Sticky
            key={sticky.id}
            sticky={sticky}
            editSticky={props.editSticky}
            deleteSticky={props.deleteSticky}
            />
        )
    })

    return (
        <div className="all-stickies">
            <div>
            {stickiesList}
            </div>
            
        </div>
    )
}

export default Stickies