//Stateful component
//need to itirate over photogallery and set props for each photo location
import React, { Component } from 'react'
import Photo from './Photo';

export class PhotoContainer extends Component {
    state = {
        activePhotoGallery: []
    };

    render() 
    {
        
        
        return (
            <div>
                <h2><strong>Results</strong></h2>
                {this.state.activePhotoGallery.map(photo => {
                    <Photo PhotoGallery={this.props.photo}/>
                })}
            </div>
        )
    }
}

export default PhotoContainer

