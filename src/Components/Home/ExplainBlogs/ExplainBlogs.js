import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext1 } from '../../../App';
import './ExplainBlogs.css';

const ExplainBlogs = (props) => {
    const history = useHistory();
    const [blog, setBlog] = useContext(UserContext1);

    const {id, title, img, description} = props.blog;
    const gotoBlogs= (id) =>{
        history.push(`/blog/${id}`);
        if(props.blog.id === id){
            setBlog(props);
        }
    }
    return (
        <div>
        <div class="card mb-5 blogs ">
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p class="card-text">{description.substring(0, 250)}......</p>
    <a onClick={() => gotoBlogs(id)} class="btn btn-secondary">Read More</a>
  </div>
</div>
</div>
    );
};

export default ExplainBlogs;