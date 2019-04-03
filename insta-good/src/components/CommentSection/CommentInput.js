import React from 'react';

const CommentInput = props => {
    return (
        <form className="comment-input">
            <input type="text" placeholder="Add Comment Here..." />
        </form>
    );
};

export default CommentInput;