import React from 'react'
import Sticky from './Sticky'
import '../App.css'

function Stickies(props){
    const allStickies = props.allStickies.map(stickies => {
        return (
            <Sticky
            key={stickies.id}
            stickies={stickies}
            editSticky={props.editSticky}
            deleteSticky={props.deleteSticky}
            />
        )
    })

    return (
        <div className="all-stickies">
            {allStickies}
        </div>
    )
}

export default Stickies