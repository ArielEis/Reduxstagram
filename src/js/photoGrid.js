import React from 'react';
import Photo from './photo';

const PhotoGrid = React.createClass({
    render(){
        "use strict";
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) => <Photo />)}
            </div>
        )
    }
});


export default PhotoGrid;