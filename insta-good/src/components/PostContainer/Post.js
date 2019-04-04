import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import './PostContainer.css';
import CommentSection from '../../../src/components/CommentSection/CommentSection.js';
import Likes from './Likes'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }
    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({likes});
    };
    render() {
        return (
            <div className="post">
                <PostHeader 
                 username={this.props.post.username}
                    thumbnailUrl={this.props.post.thumbnailUrl}
                />
                <div className="post-image-container">
                <p>Post a pic</p>
                <img
                alt="post thumbnail"
                className="post-pic"
                src={this.props.post.imgUrl}
                />
            <Likes 
                incrementLike={this.incrementLike}
                likes={this.state.likes} 
            />
            </div>
        <CommentSection 
        postId={this.props.post.imageUrl}
        comments={this.props.post.comments} />
        </div>
        );
    } 
};

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default Post;