import React from 'react'
//work in progress

function Photo(props) {
    return (
        <div>
            <li>
                <img src={`https://live.staticflickr.com/${this.props.jsonServerId}/${this.props.jsonId}_${this.props.jsonSecret}.jpg`}></img><alt>placeholder</alt>
            </li>
        </div>
    )
}

export default Photo
