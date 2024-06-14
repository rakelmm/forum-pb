import React from 'react';
import './PostCard.css';

const PostCard = ({ post, isOwner }) => {
    return (
        <div className="post-card">
            <h2>{post.title}</h2>
            <p>{post.selftext ? post.selftext.substring(0, 100) : 'No description'}...</p>
            <p>By {post.author}</p>
            <p>Published on {new Date(post.created_utc * 1000).toLocaleDateString()}</p>
            <p>{post.num_comments} comments</p>
            <p>{post.ups} likes</p>
            {isOwner && <p>{post.downs} dislikes</p>}
        </div>
    );
};

export default PostCard;

