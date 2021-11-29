//Stateful component
import React, { Component } from 'react'
import Photo from './Photo';

export class PhotoContainer extends Component {
    state = {
        photoGallery: []
    };

    render() {
        
        return (
            <div>
                <h2><strong>Results</strong></h2>
                {this.state.photoGallery.map(photo => {
                    <Photo />
                })}
            </div>
        )
    }
}

export default PhotoContainer

