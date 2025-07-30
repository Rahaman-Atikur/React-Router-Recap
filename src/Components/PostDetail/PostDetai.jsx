import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate()
    return (
        <div>
            <h2>Here is post Details</h2>
            <p>{post.body}</p>
            <button>Onclick={() => navigate()}</button>
        </div>
    );
};

export default PostDetail;