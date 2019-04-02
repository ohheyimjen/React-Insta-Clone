import React from 'react';
import './Postcontainer.css'
import Post from './Post'


const PostContainer = props => {
    return (
        <div className="post-container">
            <h3>Post Container</h3>
            {props.posts.map(item => <Post key={item.imageUrl} post={item} />)}
        </div>
    );
};


export default PostContainer;