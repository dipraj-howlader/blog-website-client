import React, {useEffect, useState} from 'react';

import ExplainBlogs from '../ExplainBlogs/ExplainBlogs';



const Blogs = () => {
    const [blogs, setBlogs] = useState(null);
    useEffect(() =>{
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            {
                blogs?.map(blog => <ExplainBlogs key={blog._id} blog={blog}></ExplainBlogs> )
            }
        </div>
    );
};

export default Blogs;