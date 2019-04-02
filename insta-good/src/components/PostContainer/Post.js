import React from 'react';

import PostHeader from './PostHeader'

consst Post = props => {
    return (
        <div className="post">
            <PostHeader />
        </div>
        <div className="post-pics">
            <p>Post a pic</p>
        </div>
    );
};

export default Post;