import axios from 'axios';
import React ,{useState} from 'react';
import { useForm } from "react-hook-form";

const BlogForm = () => {
    const [imageup, setImageup] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleImageUpload = (e) =>{

        const imageData = new FormData();
        imageData.set('key','52aafc2a818a555921fb5dc79cc32ce4');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
        imageData) 
         .then(function (response) {
            setImageup(response.data.data.url);
            alert('Image Upload successfully');

          })
          .catch(function (error) {
            console.log(error);
          });

    }

    const onSubmit = data => {
        const info  =data;
        const BlogData  = {
            info,
            imageup
        }

        fetch('http://localhost:5000/addBlog',{
            method:'POST',
             headers:{
              'content-type':'application/json'
          },
          body: JSON.stringify(BlogData)
          })
          .then(res => {
              alert("added successfully");
              window.location.reload(false);
          } )
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
    <input onChange={handleImageUpload} type="file" class="form-control-file" id="exampleFormControlFile1" />
  </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
        </div>
    );
};

export default BlogForm;
