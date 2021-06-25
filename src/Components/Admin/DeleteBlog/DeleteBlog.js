import React from 'react';

const DeleteBlog = (props) => {
    const {_id, info, imageup} = props.manageeBlog;
    const {title , description} = info;

    const handleblogdelete = (_id) =>{
        fetch(`https://morning-forest-07938.herokuapp.com/delete/${_id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then((result) =>{ 
            alert("Deleted")
            window.location.reload(false);

        })
        alert("Deteted");
        window.location.reload(false)
        
    }
    return (
        <div className="col-md-4 col-12">
                <div class="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={imageup} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description?.substring(0, 80)}</p>
    <button onClick={() => handleblogdelete(_id)} class="btn btn-primary">Delete</button>
  </div>
</div>
        </div>
    );
};

export default DeleteBlog;