import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({ postId }) => { // Certifique-se de receber postId como prop
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
                const data = await response.json();
                const postDetail = data[0].data.children[0].data;
                setPost(postDetail);
            } catch (error) {
                console.error('Error fetching post details:', error);
            }
        };

        fetchPost();
    }, [postId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="post-detail">
            <h1>{post.title}</h1>
            <p>{post.selftext}</p>
            <p>By {post.author}</p>
            <p>Published on {new Date(post.created_utc * 1000).toLocaleDateString()}</p>
            <p>{post.num_comments} comments</p>
            <p>{post.ups} likes</p>
        </div>
    );
};

export default PostDetail;
