import React from 'react';
import { useForm } from "react-hook-form";

const BlogForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {


        fetch('http://localhost:5000/addBlog',{
            method:'POST',
             headers:{
              'content-type':'application/json'
          },
          body: JSON.stringify(data)
          })
          .then(res => alert('Added successfully') )
    };

    return (
        <div>
            <form  onSubmit={handleSubmit(onSubmit)} class="form-group">

      <input  {...register("title", { required: true })}  class="form-control form-control-lg" type="text" placeholder="Blog Title" />
        <br />
        <br />

      <div class="form-group">
      <textarea {...register("description", { required: true })} class="form-control" id="" rows="6" placeholder="Blog Description" />
        </div>
        <br />
        <br />
        <br />

        <div class="form-group">
    <label for="exampleFormControlFile1">Upload Image</label>
    <input {...register("image")}  type="file" class="form-control-file" id="exampleFormControlFile1" />
  </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
        </div>
    );
};

export default BlogForm;
