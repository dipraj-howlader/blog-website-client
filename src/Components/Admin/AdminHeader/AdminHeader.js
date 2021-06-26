import React from 'react';
import { useHistory } from 'react-router-dom';

const AdminHeader = () => {
    const history = useHistory();

    const gotoBlog = () =>{
        history.push('/uploadblog')
    }
    const gotoDeleteBlog = () =>{
        history.push('/deleteblog')
    }
    const gotoHome =() =>{
        history.push('/home')
    }
    return (
        <div className="text-center">
            <button onClick={gotoBlog} className="m-3  btn btn-success">Add Blog</button>
            <button onClick={gotoDeleteBlog} className="m-3 btn btn-success"> Delete Blog</button>
            <button onClick={gotoHome} className="m-3 btn btn-success">Home</button>
      
        </div>
    );
};

export default AdminHeader;