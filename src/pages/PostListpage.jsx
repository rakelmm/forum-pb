import React, { useState, useEffect } from 'react';
import PostsList from '../components/PostList';
import { getHotPosts } from '../api';


const PostsListPage = () => {
    const [posts, setPosts] = useState([]);
    const currentUser = 'currentLoggedInUser'; 

    useEffect(() => {
        const fetchPosts = async () => {
            const postsData = await getHotPosts('javascript');
            setPosts(postsData.slice(0, 10).sort((a, b) => b.created_utc - a.created_utc));
        };
        fetchPosts();
    }, []);

    return (
        <div className="posts-list-page">
            <h1>Postagens interessantes</h1>
            <PostsList posts={posts} currentUser={currentUser} />
        </div>
    );
};

export default PostsListPage;
