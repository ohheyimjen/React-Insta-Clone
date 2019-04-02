import React from 'react';
import PostHeader from './PostHeader';
import './PostContainer.css';
import CommentSection from '../../../src/components/CommentSection/CommentSection.js';

const Post = props => {
    return (
        <div className="post">
            <PostHeader 
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
        <div className="post-image-container">
            <p>Post a pic</p>
            <img
                alt="post thumbnail"
                className="post-pic"
                src={props.post.imgUrl}
            />
        </div>
        <CommentSection comments={props.post.comments} />
        </div>
    );
};

export default Post;