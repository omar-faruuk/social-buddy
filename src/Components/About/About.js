import React from 'react';
import { useHistory } from 'react-router-dom';

const About = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const handleClick =(id)=>{
      const url = `/postDetail/${id}`;
      history.push(url)
    }
    return (
        <div>
            <h2>{title} post id: {id}</h2>
            <p>{body}</p>
            <button onClick={() => handleClick(id)}>Show detail</button>
        </div>
    );
};

export default About;