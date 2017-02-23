import React from 'react';
import Photo from './photo';
import Comments from './comments';

const Single = React.createClass({
    render(){
        "use strict";
        const { postId } = this.props.params;
        const i = this.props.posts.findIndex((posts) => posts.code === postId);
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];
        return (
            <div className="single-show">
                <div className="single-photo">
                    <Photo i={i} post={post} {...this.props}/>
                    <Comments postComments={postComments} {...this.props}/>
                </div>
            </div>
        )
    }
});


export default Single;