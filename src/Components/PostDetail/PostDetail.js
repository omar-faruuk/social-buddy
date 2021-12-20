import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    useEffect(()=>{
     const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
     fetch(url)
     .then(res => res.json())
     .then(data =>setPost(data))
    },[id]);
    const { title, body} = post;
    return (
        <div>
            <h2>This is post detail: {id}</h2>
            <p>Title: {title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetail;