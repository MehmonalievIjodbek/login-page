import React, {useState, useEffect} from "react";
import axios from "axios";

export function DataFetch() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://mocki.io/v1/489377c2-377c-4716-8c72-8477b792f59b')
        .then(res => {
            setPosts(res.data)
        })  
        .catch(err => {
            console.log(err);
        })
    }, [])
    return { posts }
}