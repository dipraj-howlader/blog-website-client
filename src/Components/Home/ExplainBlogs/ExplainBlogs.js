import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext1 } from '../../../App';
import './ExplainBlogs.css';

const ExplainBlogs = (props) => {
    const history = useHistory();
    const [blog, setBlog] = useContext(UserContext1);
    console.log(props.blog)
    const {_id, info, imageup} = props.blog;
    const { title, description } = info;
    console.log(description);

    const gotoBlogs= (_id) =>{
        history.push(`/blog/${_id}`);
        if(props.blog._id === _id){
            setBlog(props);
        }
    }
    return (
        <div>
        <div class="card mb-5 blogs ">
  <img src={imageup} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p class="card-text">{description?.substring(0, 250)}......................................</p>
    <a onClick={() => gotoBlogs(_id)} class="btn btn-secondary">Read More</a>
  </div>
</div>
</div>
    );
};

export default ExplainBlogs;