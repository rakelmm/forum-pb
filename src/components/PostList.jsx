import React from 'react';
import PostCard from '../components/PostCard';

import './PostList.css';

const PostsList = ({ posts, currentUser }) => {
    return (
        <div className="posts-list">
            {posts.map(post => (
                <PostCard 
                    key={post.id} 
                    post={post} 
                    isOwner={post.author === currentUser} 
                />
            ))}
        </div>
    );
};

export default PostsList;
