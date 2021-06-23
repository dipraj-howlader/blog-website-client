import React from 'react';
import './ExplainBlogs.css';

const ExplainBlogs = (props) => {
    const {id, title, img, description} = props.blog;
    return (
        <div>
        <div class="card mb-5 blogs ">
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p class="card-text">{description.substring(0, 250)}......</p>
    <a class="btn btn-secondary">Read More</a>
  </div>
</div>
</div>
    );
};

export default ExplainBlogs;