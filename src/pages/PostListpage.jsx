import React, { useState, useEffect } from 'react';
import PostsList from '../components/PostList';

const PostsListPage = () => {
    const [posts, setPosts] = useState([]);
    const [sortBy, setSortBy] = useState('created_utc'); 
    const [sortOrder, setSortOrder] = useState('desc'); 

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://www.reddit.com/r/javascript/hot.json');
                const data = await response.json();
                const postsData = data.data.children.map(child => ({
                    id: child.data.id,
                    title: child.data.title,
                    author: child.data.author,
                    body: child.data.selftext,
                    created_utc: child.data.created_utc,
                    num_comments: child.data.num_comments,
                    ups: child.data.ups,
                    downs: child.data.downs
                }));

                
                const sortedPosts = sortPosts(postsData, sortBy, sortOrder);

                setPosts(sortedPosts.slice(0, 10)); 
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [sortBy, sortOrder]);

    
    const sortPosts = (posts, sortBy, sortOrder) => {
        return posts.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a[sortBy] - b[sortBy];
            } else {
                return b[sortBy] - a[sortBy];
            }
        });
    };

    
    const handleSortChange = (event) => {
        const { value } = event.target;
        setSortBy(value);
    };

   
    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div className="posts-list-page">
            <h1>Postagens interessantes</h1>
            <div className="sort-options">
                <label>Ordenar por:</label>
                <select value={sortBy} onChange={handleSortChange}>
                    <option value="created_utc">Data</option>
                    <option value="num_comments">Quantidade de Comentários</option>
                    <option value="ups">Quantidade de Curtidas</option>
                    <option value="title">Título</option>
                </select>
                <button onClick={toggleSortOrder}>
                    {sortOrder === 'asc' ? 'Ascendente' : 'Descendente'}
                </button>
            </div>
            <div className="posts-list-container">
                <PostsList posts={posts} />
            </div>
        </div>
    );
};

export default PostsListPage;
