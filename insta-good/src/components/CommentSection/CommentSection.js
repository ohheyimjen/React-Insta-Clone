import React from 'react';
import './CommentSection.css';
import Comment from './Comment';
import CommentInput from './CommentInput';
import PropTypes from 'prop-types';


const CommentSection = props => {
        return (
            <div className="comment-section">
                <h2>*Comment Section*</h2>
                {props.comments.map((comment, input) => <Comment key={input} comment={comment} />)} 
                <CommentInput /> 
            </div>
        );
};

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({text: PropTypes.string, username: PropTypes.string})
    )
};

export default CommentSection;