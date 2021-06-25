import React, { useContext, useEffect, useState } from 'react';
import { UserContext2 } from '../../../App';
import AdminHeader from '../AdminHeader/AdminHeader';
import DeleteBlog from '../DeleteBlog/DeleteBlog';

const ManageBlog = () => {

    const [manBlogs, setManBlogs] = useState(null)
    useEffect(() =>{
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setManBlogs(data))
    },[])
    return (
        <div style={{justifyContent:'center',alignItems:'center',textAlign:'center'}} className="row">
            <AdminHeader></AdminHeader>
            {
                manBlogs?.map(manageeBlog => <DeleteBlog key={manageeBlog._id} manageeBlog={manageeBlog}></DeleteBlog>)
            }
        </div>
    );
};

export default ManageBlog;