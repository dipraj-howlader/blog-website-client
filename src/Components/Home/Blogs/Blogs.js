import React, {useEffect, useState} from 'react';

import ExplainBlogs from '../ExplainBlogs/ExplainBlogs';



const Blogs = () => {
    const [blogs, setBlogs] = useState(null);
    useEffect(() =>{
        fetch('https://morning-forest-07938.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            {
                blogs?.length=== undefined && <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only"></span>
                </div>
              </div>
            }
            {
                blogs?.map(blog => <ExplainBlogs key={blog._id} blog={blog}></ExplainBlogs> )
            }
        </div>
    );
};

export default Blogs;