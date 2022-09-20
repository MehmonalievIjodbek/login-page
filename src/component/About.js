import React from 'react';
import { DataFetch } from './DataFetch';

const About = (props) => {
    const {posts} = DataFetch();
  return (
    <div>
        <h1>About</h1>
        {posts.map((index) => (
            <img src={index.photo}/>
        ))}

    </div>
  )
}

export default About;