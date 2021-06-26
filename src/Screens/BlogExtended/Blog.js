import React,{useContext} from 'react';
import { useHistory } from 'react-router';
import { UserContext1 } from '../../App';
import './Blog.css';

const Blog = () => {
    const [blog, setBlog] = useContext(UserContext1);
    const history = useHistory();


    const { info, imageup} = blog.blog;
    const { title, description } = info;

    const gotoHomePage = () =>{
        history.push(`/home`)
    }


        return (
            <div class="card mb-3 blogContainer">
            <img src={imageup} class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title">{title}</h3>
              <p class="card-text">{description}</p>
              <div class="d-grid gap-2">
  <button onClick={gotoHomePage} class="btn btn-primary" type="button">Back To Main Page</button>
  </div>
            </div>
          </div>
    );
};

export default Blog;