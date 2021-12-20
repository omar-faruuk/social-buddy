import React, { useEffect, useState } from 'react';
import About from '../About/About';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div>
            <h2>Total post: {post.length}</h2>
            {
                post.map(post => <About post={post}></About>)
            }

        </div>
    );
};

export default Home;