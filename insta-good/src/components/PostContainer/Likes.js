import React from 'react';

const Likes = props => {
    return [
        <div 
            className="likes"
            key="like-click"
            onClick={props.incrementLike}
        >
            <div className="likes-wrapper">
                <i className="far fa-heart" />
            </div>
            <div className="likes-wrapper">
                <i className="far fa-comment" />
            </div>
        </div>,
        <div className="likes" key="likes-container">
            <div className="like-section-wrapper">{props.likes}</div>
        </div>
    ];
};

export default Likes;
