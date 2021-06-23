import React,{useContext} from 'react';
import { useHistory } from 'react-router';
import { UserContext1 } from '../../../App';
const Blog = () => {
    const [blog, setBlog] = useContext(UserContext1);
    const history = useHistory();


    const { title, img, description} = blog.blog;
    const gotoHomePage = () =>{
        history.push(`/home`)
    }


        return (
            <div class="card mb-3">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              <div class="d-grid gap-2">
  <button onClick={gotoHomePage} class="btn btn-primary" type="button">Back To Main Page</button>
  </div>
            </div>
          </div>
    );
};

export default Blog;